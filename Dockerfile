FROM ubuntu:16.04

# Install dependencies
RUN apt-get update --yes && apt-get upgrade --yes
RUN  apt-get install git npm python-pip python-dev build-essential --yes
RUN  pip install --upgrade pip 
RUN  pip install --upgrade virtualenv
RUN  pip install --upgrade virtualenvwrapper


# Non-privileged user
RUN useradd -m lunchbox
USER lunchbox
WORKDIR /home/lunchbox

# Clone repo
RUN git clone https://github.com/wpr-ttbook/lunchbox.git
WORKDIR /home/lunchbox/lunchbox/

# Install dependencies
pip install -r requirements.txt
npm install

#fabricate app
fab app
