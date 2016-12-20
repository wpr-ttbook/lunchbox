FROM python:2.7

# Install dependencies
RUN apt-get update --yes && apt-get upgrade --yes
RUN  apt-get install git npm python-pip python-dev build-essential --yes
RUN  pip install --upgrade pip

# Non-privileged user
RUN useradd -m lunchbox
USER lunchbox
WORKDIR /home/lunchbox

# Clone repo
RUN git clone https://github.com/wpr-ttbook/lunchbox.git
WORKDIR /home/lunchbox/lunchbox/

# Install dependencies
RUN pip install -r requirements.txt
RUN npm install

#fabricate app
RUN fab app
