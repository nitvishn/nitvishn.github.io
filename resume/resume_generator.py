import os
from jinja2 import Template
from latex import build_pdf
import json

def loadData(filename):
    with open('../src/shared/' + filename, 'r') as file:
        return json.load(file)

t = Template(open("resume_template.tex", "r").read())

research = loadData('projects.json')

txt = t.render(something="Yes", research=research)
print(txt)
open("resume.tex", "w").write(txt)
os.system("pdflatex resume.tex")
