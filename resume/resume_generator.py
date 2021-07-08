import os
from jinja2 import Template
from pdflatex import PDFLaTeX

t = Template(open("resume_template.tex", "r").read())

# this builds a pdf-file inside a temporary directory
pdfl = PDFLaTeX.from_jinja2_template(t)
pdf, log, completed_process = pdfl.create_pdf(keep_pdf_file=True, keep_log_file=True)