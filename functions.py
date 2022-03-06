import requests
from selenium import webdriver
from PIL import Image
# helper functions

def getURL(url):
    urlToCheck = url

    headers = {
        "Accept": "application/json",
        "x-apikey": "6dd967d4c5844706b9dea875431abca9fc6d5af37a90767ba4519bf011f641a4"
    }

    response = requests.request("GET", urlToCheck, headers=headers)
    d = response.status_code
    print(d)

    if d == 200:
        msg = "Site is legit"
        print("Site is legit")

    else:
        msg = "Site is suspicious"
        print("Site is suspicious")

    return msg

def getScreenshot(url):
    driver = webdriver.Chrome(executable_path='C:\Program Files (x86)\chromedriver.exe')
    urlScreenshot =url
    driver.get(urlScreenshot)
    driver.save_screenshot("t.png")
    s = Image.open("t.png")
    s.show()





