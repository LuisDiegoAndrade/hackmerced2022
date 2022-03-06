from flask import Flask, render_template, json, request, abort, redirect, url_for
from functions import *
app = Flask(__name__)


@app.route('/urlP/', methods=['GET', 'POST'])
def load():
    if request.method == 'POST':
        url = request.json['txtValue']
        print(url)
        return render_template("url.html",f=getURL(url),s=getScreenshot(url))
    else:
        return render_template("url.html")


if __name__ == '__main__':
    app.run()
    app.run(host='localhost')
