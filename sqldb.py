import wget
import sqlite3

conn = sqlite3.connect('file.db', check_same_thread=False)
c = conn.cursor()


def insert(url):
    hasfile = c.execute("select * from file where url='{fileUrl}'".format(fileUrl=url))
    if hasfile.fetchone():
        pass
    else:
        c.execute("insert into file(url) values('{fileUrl}')".format(fileUrl=url))
        conn.commit()


def download(id):
    if id > 0:
        filedata = c.execute("select * from file where id='{id}'".format(id=id))
    else:
        filedata = c.execute("select * from file where status is null")
    for item in filedata:
        try:
            filename = wget.download(item[1], 'static/video')
            c.execute("update file set status =1 where id='{id}'".format(id=item[0]))
            c.execute("update file set name ='{name}' where id='{id}'".format(name=filename, id=item[0]))
            conn.commit()
        except BaseException:
            c.execute("update file set status =0 where id='{id}'".format(id=item[0]))
            conn.commit()
    return 'success'


def getData():
    result = c.execute("select * from file order by id desc").fetchall()
    return result


def delete(id):
    c.execute("delete from file where id='{id}'".format(id=id))
    conn.commit()
