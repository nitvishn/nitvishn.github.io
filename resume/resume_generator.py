import os
from jinja2 import Template
from latex import build_pdf
import json
import html2latex

def loadData(filename):
    with open('../src/shared/' + filename, 'r', encoding="utf8") as file:
        return json.load(file)

t = Template(open("resume_template.tex", "r").read())

research = loadData('research.json')
work = loadData('work.json')
projects = loadData('projects.json')
organisations = loadData('organisations.json')
for L in [research, work, projects, organisations]:
    for i,item in enumerate(L):
        for key in item:
            if item[key] and (key=='description' or key=='shortdescription'):
                L[i][key] = html2latex.string2latex(item[key])
base_url = "https://www.nitvishn.net/"

txt = t.render(something="Yes", research=research, work=work, projects=projects, organisations=organisations, base_url=base_url)
open("resume.tex", "w").write(txt)
os.system("pdflatex resume.tex >nul 2>&1")
os.system("mv resume.pdf ../public/")
print("Rendered PDF.")