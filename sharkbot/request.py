import requests
import json

url="http://192.168.1.13:8080/search"

body='{"data":["speed shark"],"top_k":3}'
resp=requests.post(url,body)
resp=json.loads(resp.text)
print(resp["data"]["docs"][0]["matches"][0]["text"])
