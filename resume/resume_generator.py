import os
from jinja2 import Template
from latex import build_pdf
import json
import html2latex

def loadData(filename):
    with open('../src/shared/' + filename, 'r') as file:
        return json.load(file)

t = Template(open("resume_template.tex", "r").read())

research = loadData('research.json')
work = loadData('work.json')
projects = loadData('projects.json')
organisations = loadData('organisations.json')
for key in projects:
    projects[key] = html2latex.string2Latex(projects[key])
print(projects)

txt = t.render(something="Yes", research=research, work=work, projects=projects, organisations=organisations)
open("resume.tex", "w").write(txt)
os.system("pdflatex resume.tex >/dev/null")
print("Rendered PDF.")