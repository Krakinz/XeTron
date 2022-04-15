FROM kalilinux/kali-rolling
RUN apt update 
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt upgrade -y 
RUN apt install git -y 
RUN apt install nodejs -y
RUN apt install python3 -y 
RUN apt install python3-pip -y 
RUN apt install fonts-symbola 
RUN git clone https://github.com/Krakinz/XeTron.git
RUN cd XeTron
WORKDIR /XeTron
RUN npm install 
CMD node ☆XɛTrση✭.js