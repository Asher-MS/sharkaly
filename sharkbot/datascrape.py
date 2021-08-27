import requests
from bs4 import BeautifulSoup

url="https://www.sharkwater.com/shark-database/10-largest-sharks-in-the-world/"
page=requests.get(url)

soup=BeautifulSoup(page.content,'html.parser')
inner=soup.find_all("div",class_="inner")[0]
questions=inner.find_all("h3")
answers=inner.find_all("p")
for i in range(len(questions)):
    print(questions[i].text+','+answers[i].text)

