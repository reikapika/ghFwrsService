import os, requests
from flask import Flask, render_template, request, jsonify
import pprint

app = Flask(__name__)
GITHUB_KEY = os.environ["GITHUB_KEY"]


@app.route("/")
def create():
    """Base of the web service. Return one page html."""

    return render_template("index.html")


@app.route("/search.json", methods=['GET'])
def search():
    """Look up a github user's followers and make API call.
    Turn the result into JSON and pass it back to frontend."""

    username = request.args.get('username')
    url = "https://api.github.com/users/" + username

    headers = {
               'Accept': 'application/vnd.github.v3+json',
                # 'Authorization': 'token {}'.format(GITHUB_KEY),
               }
    params = {
              'q': 'type:user',
              'access_token': GITHUB_KEY,
              }

    resp = requests.get(url=url,params=params,headers=headers)
    user = resp.json()
    # Status code check for proper frontend interaction
    if resp.status_code == 200:
        pprint.pprint(user)
        fwrs_url = user['followers_url']
        fwrs = requests.get(fwrs_url).json()
        return jsonify(user=user,fwrs=fwrs)

    # Error handle if invalid username was entered
    else:
        if user['message'] == "Not Found":
            return jsonify(result='Null')
        else:
            return jsonify(result='Error')

#
# @app.route("/load_more.json", methods=['GET'])
# def load_next():
#     """Fetch the next page of followers if total count > 30."""
#
#     page = 2
#     resp2 = requests.get("https://api.github.com/users/")
#     while



if __name__ == "__main__":

    app.debug = False

    PORT = int(os.environ.get("PORT", 5000))
    DEBUG = "NO_DEBUG" not in os.environ

    app.run(host="0.0.0.0", port=PORT, debug=DEBUG)
