# convert html document to LaTeX
import lxml.html # http://lxml.de/lxmlhtml.html
from lxml import etree
from io import StringIO, BytesIO
import re

def html2latex(el): # fill in this function to catch and convert html tags
    result = []
    if el.text:
        result.append(el.text)
    for sel in el:
        if False: # get info
            print('tag',sel.tag)
            print('text',sel.text)
            print('tail',sel.tail)
            print('attrib',sel.attrib)
        if sel.tag in ["h1"]:
            result.append('\hmchapter{%s}' % html2latex(sel))
        elif sel.tag in ["td", "table"]:
            result.append("<%s>" % sel.tag)
            result.append(html2latex(sel))
            result.append("</%s>" % sel.tag)
        elif sel.tag in ["span"]:  #
            for att in sel.attrib.keys():
                if att =='style':
                    if sel.attrib[att] == 'font-style:italic':
                        result.append(r'\textit{%s}' % (html2latex(sel)))
        else:
            result.append(html2latex(sel))
        if sel.tail:
            result.append(sel.tail)
    return "".join(result)

def string2latex(html):
    # must be unicode or lxml parse crashes
    html = re.sub('%', '\%', html)
    parser = etree.HTMLParser()
    tree   = etree.parse(StringIO(html), parser) # expects a file, use StringIO for string
    root = tree.getroot()
    latex = html2latex(root)
    return latex