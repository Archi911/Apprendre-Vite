from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/podcasts')
def podcasts():
    return render_template('podcasts.html')

@app.route('/exercices')
def exercices():
    return render_template('exercices.html')

@app.route('/test-niveau')
def test_niveau():
    return render_template('test_niveau.html')

if __name__ == '__main__':
    app.run(debug=True)