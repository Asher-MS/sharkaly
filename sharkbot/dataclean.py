questions=open("questions.txt",'r')
answers=open("answers.txt",'r')
quesarray=[]
ansarray=[]
for i in questions:
    quesarray.append(i)

for i in answers:
    ansarray.append(i)

datafile=open('sharkdata.csv',"w")

for i in range(len(quesarray)):
    pair=quesarray[i]+','+ansarray[i]
    datafile.write(pair+'\n')

questions.close()
answers.close()
datafile.close()

