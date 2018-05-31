import wget
import sqlite3
import os

# status=0 初始化默认值;status=1 下载失败，status=2 进行中,status=3 已完成
conn = sqlite3.connect('file.db', check_same_thread=False)
c = conn.cursor()

def insert(url):
    hasfile = c.execute("select * from file where url='{fileUrl}'".format(fileUrl=url))
    if hasfile.fetchone():
        pass
    else:
        c.execute("insert into file(url,status) values('{fileUrl}',0)".format(fileUrl=url))
        conn.commit()

def download(id):
    if id > 0:
        filedata = c.execute("select * from file where id='{id}' and status <= 1".format(id=id))
    else:
        filedata = c.execute("select * from file where status = 0")
    for item in filedata:
        try:
            c.execute("update file set status =2 where id='{id}'".format(id=item[0]))
            conn.commit()
            filename = wget.download(item[1], 'static/video')
            extension = ['py','pyc','php','js','sh']
            if filename.split('.')[-1] in extension:
                c.execute("update file set status =4 where id='{id}'".format(id=item[0]))
                conn.commit()
                os.remove(os.getcwd()+"/static/video/"+filename)
            else:
                c.execute("update file set status =3 where id='{id}'".format(id=item[0]))
                c.execute("update file set name ='{name}' where id='{id}'".format(name=filename, id=item[0]))
                conn.commit()
        except BaseException:
            c.execute("update file set status =1 where id='{id}'".format(id=item[0]))
            conn.commit()
    return 'success'

def getData():
    result = c.execute("select * from file order by id desc").fetchall()
    return result


def delete(id):
    c.execute("delete from file where id='{id}'".format(id=id))
    conn.commit()
