import os
from jinja2 import Template
from latex import build_pdf

t = Template(open("resume_template.tex", "r").read())
txt = t.render(something="World")
open("resume.tex", "w").write(txt)
os.system("pdflatex resume.tex")