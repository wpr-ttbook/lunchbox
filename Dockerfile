FROM python:onbuild

# Install dependencies
RUN pip install -r requirements.txt
RUN npm install

#fabricate app
RUN fab app
