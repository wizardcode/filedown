from flask import Flask
from flask import render_template
from flask import request
from flask_cors import *
import sqldb
import json
app=Flask(__name__)
CORS(app,supports_credentials=True)

@app.route('/')
def index():
    return render_template('file.html')

@app.route('/addfile',methods=['POST', 'GET'])
def addFile():
    file_url=request.form['url']
    sqldb.insert(file_url)
    return json.dumps('success')

@app.route('/getfile')
def getFile():
    return json.dumps(sqldb.getData())

@app.route('/download',methods=['POST', 'GET'])
def download():
    if request.method=='POST':
        id=request.form['id']
        if not id:
            id=0
        else:
            id=int(id)
    else:
        id=0
    return sqldb.download(id)

@app.route('/deletefile',methods=['POST', 'GET'])
def deleteFile():
    id=request.form['id']
    sqldb.delete(id)
    return json.dumps('success')

if __name__=='__main__':
    app.run()


