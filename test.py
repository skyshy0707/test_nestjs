import requests

url = "http://127.0.0.1:3000/request"
data = {
    "answer": "Hi!",
    "wait": 12
}
req = requests.post(url, data=data)

print(
    "STATUS_CODE", req.status_code, 
    "REASON", req.reason, 
    "TEXT", req.text, 
    "JSON", req.json()
)