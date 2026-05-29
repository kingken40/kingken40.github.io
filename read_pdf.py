import pdfplumber
pdf = pdfplumber.open('C:/Users/offda/OneDrive/Documents/Fes_4/assets/Kenneth-Okwu-Software Engineer.pdf')
for page in pdf.pages:
    print(page.extract_text())
pdf.close()
