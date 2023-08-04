from flask import Flask,jsonify,request

app=Flask(__name__)
@app.route("/")

def hello_world():
    return("hello world")

contacts=[
    {
        "number":3106958299,
        "name":u"dad",
        "id":"1",
        "done":False        
    },
    {
        "number":4242790327,
        "name":u"mom",
        "id":"2",
        "done":False
    },
     {
        "number":3644122500,
        "name":u"Sri",
        "id":"3",
        "done":False
    }
]
@app.route("/new-contact",methods=["POST"])
def add_task():
    if not request.json:
        return jsonify({
            "status":"error",
            "message":"please provide data"
            
        },400)
    contact={
        "number":request.json.get("number",""),
        "name":request.json["name"],
        "id":contacts[-1]["id"]+1,
        "done":False
        
    }
    contacts.append(contact)
    return jsonify({
        "status":"success",
        "message":"task added"
    })
      
@app.route("/get-data")
def get_task():
    return jsonify({
        "data":contacts
    })
 
if (__name__=="__main__"):
    app.run(debug=True)

        