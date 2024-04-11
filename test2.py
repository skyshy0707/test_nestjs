import requests

url = "http://127.0.0.1:3000/api/v1/request"
data2 = {
    "answer": "Hey!",
    "wait": 5
}
req = requests.post(url, data=data2)

print(
    "STATUS_CODE", req.status_code, 
    "REASON", req.reason, 
    "TEXT", req.text,
    "JSON", req.json()
)