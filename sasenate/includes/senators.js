// JavaScript Document

// Senate is an array of arrays of the form:
	// [first name,last name,quad,email,senate status,RO status,SOAR,GA,App,COC,bio]
	// Where the status for the senate/committees are C,V,R,M for Chair, Vice Chair, Ranking
	// Member (Parlimentarian), Member or Non-member. Quads are coded A,C,D,I,S,E,F,O,L for
	// Alumni, Colonial, Dutch, Indian, State, Empire, Freedom, Off-campus or At-Large.
	
	var senate=	[


["Greg","Albert","L","galbert@ualbanysa.org","C","N","N","N","N","N","No Biography on File","albert.jpg"],

["Ben","Kaufman","L","bkaufman@ualbanysa.org","M","N","N","N","N","N","No Biography on File","kaufman.jpg"],

["Skyler","DeAngelo","L","sdeangelo@ualbanysa.org","M","N","N","N","N","N","No Biography on File","deangelo.jpg"],

["Rob","Forman","L","rforman@ualbanysa.org","M","N","N","N","N","N","No Biography on File","forman.jpg"],

["Jen","Rounds","L","jrounds@ualbanysa.org","M","N","N","N","N","N","No Biography on File","rounds.jpg"],

["Stephanie","Leader","L","sleader@ualbanysa.org","M","N","N","N","N","N","No Biography on File","leader.jpg"],

["Roger","Rook","L","rrook@ualbanysa.org","M","N","N","N","N","N","No Biography on File","rook.jpg"],

["Dan","Oshea","L","doshea@ualbanysa.org","M","N","N","N","N","N","No Biography on File","oshea.jpg"],

["Nathalia","Rivera","L","nrivera@ualbanysa.org","M","N","N","N","N","N","No Biography on File","rivera.jpg"],

["Ulric","Bultman","L","ubultman@ualbanysa.org","M","N","N","N","N","N","No Biography on File","bultman.jpg"],

		

;







function masterlist(quad)
{

for (var loop = 0; loop <senate.length; loop++)
{
	if (senate[loop][2]==quad)
	{
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][1],">",senate[loop][0]," ",senate[loop][1],"</a></td></tr>");
	}
}
}

function committee(ref)
{
var count = 0;
for (var loop = 0; loop <senate.length; loop++)
{
	if (senate[loop][ref]=="C")
	{
		if (ref==8)
			{
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][1],">",senate[loop][0]," ",senate[loop][1]," - Chair</a></td></tr>");
				count++;
	}
	else
	{
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][1],">",senate[loop][0]," ",senate[loop][1]," - Chair</a></td></tr>");
				count++;
	}
	}
}
if (count==0){
document.write("<tr><td>Committee Chair has not been assigned yet.</td></tr>");
}

var count = 0;
	if (ref==9)
	count=-1;
for (var loop = 0; loop <senate.length; loop++)
{
	if (senate[loop][ref]=="R")
	{
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][1],">",senate[loop][0]," ",senate[loop][1]," - Ranking Member</a></td></tr>");
				count++;

	}}
	
	
	if (count==0){
document.write("<tr><td>Ranking Member has not been assigned yet.</td></tr>");
}
	
	
	
	var count = 0;
	if (ref==9)
	count=-1;
	for (var loop = 0; loop <senate.length; loop++)
{
	if (senate[loop][ref]=="V")
	{
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][1],">",senate[loop][0]," ",senate[loop][1]," - Vice Chair</a></td></tr>");
				count++;

	}}
	if (count==0){
document.write("<tr><td>Vice Chair has not been assigned yet.</td></tr>");
}
	
	
var count = 0;
for (var loop = 0; loop <senate.length; loop++)
{
	if (senate[loop][ref]=="M")
	{
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][1],">",senate[loop][0]," ",senate[loop][1],"</a></td></tr>");
		count++;
		
	}
	
}

if (count==0){
document.write("<tr><td>Committee Members have not been assigned yet.</td></tr>");
}




}

function bio(senator)
{
// Find the Senator's array refrence
var ref=-1
for (var loop = 0; loop <senate.length; loop++)
{

	if (senate[loop][1]==senator)
	{
		ref=loop;
	}

}

if (ref<0){
	document.write("<h2>Error - Invalid Senator</h2>");
	return;
}

//Leg Aid
if (senate[ref][2]=="N")
{
	document.write("<h2>",senate[ref][0]," ",senate[ref][1],"</h2><p><a href=mailto:",senate[ref][3],">",senate[ref][3],"</a><br>");
	document.write("Chief Legislative Aid<br>");
	return;
}


// Header
document.write("<h2>Senator ",senate[ref][0]," ",senate[ref][1],"</h2><p><a href=mailto:",senate[ref][3],">",senate[ref][3],"</a><br>Representing ");

// Print area representing
if (senate[ref][2]=="I"){
	document.write("Indian Quad<br>");}
if (senate[ref][2]=="S"){
	document.write("State Quad<br>");}
if (senate[ref][2]=="D"){
	document.write("Dutch Quad<br>");}
if (senate[ref][2]=="C"){
	document.write("Colonial Quad<br>");}
if (senate[ref][2]=="E"){
	document.write("Empire Commons<br>");}
if (senate[ref][2]=="F"){
	document.write("Freedom Quad<br>");}
if (senate[ref][2]=="O"){
	document.write("Off-Campus Students<br>");}
if (senate[ref][2]=="A"){
	document.write("Alumni Quad<br>");}
if (senate[ref][2]=="L"){
	document.write("all students as an At-Large Senator<br>");}

// Check for Senate Officer Status
if (senate[ref][4]=="C"){
	document.write("Chair of the Student Association Senate<br>");}
if (senate[ref][4]=="V"){
	document.write("Vice-Chair of the Student Association Senate<br>");}
if (senate[ref][4]=="R"){
	document.write("Parlimentarian of the Student Association Senate<br>");}

// Check for RO Status
if (senate[ref][5]=="C"){
	document.write("Chair of the <a href=ro.shtml>Rules and Operations Committee</a><br>");}
if (senate[ref][5]=="V"){
	document.write("Vice-Chair of the <a href=ro.shtml>Rules and Operations Committee</a><br>");}
if (senate[ref][5]=="R"){
	document.write("Ranking Member of the <a href=ro.shtml>Rules and Operations Committee</a><br>");}
if (senate[ref][5]=="M"){
	document.write("Member of the <a href=ro.shtml>Rules and Operations Committee</a><br>");}

// Check for SOAR Status
if (senate[ref][6]=="C"){
	document.write("Chair of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");}
if (senate[ref][6]=="V"){
	document.write("Vice-Chair of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");}
if (senate[ref][6]=="R"){
	document.write("Ranking Member of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");}
if (senate[ref][6]=="M"){
	document.write("Member of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");}

// Check for GA Status
if (senate[ref][7]=="C"){
	document.write("Chair of the <a href=ga.shtml>Governmental Affairs Committee</a><br>");}
if (senate[ref][7]=="V"){
	document.write("Vice-Chair of the <a href=ga.shtml>Governmental Affairs Committee</a><br>");}
if (senate[ref][7]=="R"){
	document.write("Ranking Member of the <a href=ga.shtml>Governmental Affairs Committee</a><br>");}
if (senate[ref][7]=="M"){
	document.write("Member of the <a href=ga.shtml>Governmental Affairs Committee</a><br>");}

// Check for AP Status
if (senate[ref][8]=="C"){
	document.write("Chair of the <a href=app.shtml>Appropriations Committee</a><br>");}
if (senate[ref][8]=="V"){
	document.write("Vice-Chair of the <a href=app.shtml>Appropriations Committee</a><br>");}
if (senate[ref][8]=="R"){
	document.write("Ranking Member of the <a href=app.shtml>Appropriations Committee</a><br>");}
if (senate[ref][8]=="M"){
	document.write("Member of the <a href=app.shtml>Appropriations Committee</a><br>");}

// Check for COC Status
if (senate[ref][9]=="C"){
	document.write("Chair of the <a href=coc.shtml>Committee of Chairmen</a><br>");}
if (senate[ref][9]=="M"){
	document.write("Member of the <a href=coc.shtml>Committee of Chairmen</a><br>");}


// Footer
document.write("</p>");
}





function newbio(senator)
{
// Find the Senator's array refrence
var ref=-1
for (var loop = 0; loop <senate.length; loop++)
{

	if (senate[loop][1]==senator)
	{
		ref=loop;
	}

}

if (ref<0){
	document.write("<h2>Error - Invalid Senator</h2>");
	return;
}

// Header
document.write("<h2>Senator ",senate[ref][0]," ",senate[ref][1],"</h2><p><img src=",senate[ref][1],".jpg class=senatorpic><br><a href=mailto:",senate[ref][3],">",senate[ref][3],"</a><br>Representing ");

// Print area representing
if (senate[ref][2]=="I"){
	document.write("Indian Quad<br>");}
if (senate[ref][2]=="S"){
	document.write("State Quad<br>");}
if (senate[ref][2]=="D"){
	document.write("Dutch Quad<br>");}
if (senate[ref][2]=="C"){
	document.write("Colonial Quad<br>");}
if (senate[ref][2]=="E"){
	document.write("Empire Commons<br>");}
if (senate[ref][2]=="F"){
	document.write("Freedom Quad<br>");}
if (senate[ref][2]=="O"){
	document.write("Off-Campus Students<br>");}
if (senate[ref][2]=="A"){
	document.write("Alumni Quad<br>");}
if (senate[ref][2]=="L"){
	document.write("all students as an At-Large Senator<br>");}

// Check for Senate Officer Status
if (senate[ref][4]=="C"){
	document.write("Chair of the Student Association Senate<br>");}
if (senate[ref][4]=="V"){
	document.write("Vice-Chair of the Student Association Senate<br>");}
if (senate[ref][4]=="R"){
	document.write("Parlimentarian of the Student Association Senate<br>");}

// Check for RO Status
if (senate[ref][5]=="C"){
	document.write("Chair of the <a href=ro.shtml>Rules and Operations Committee</a><br>");}
if (senate[ref][5]=="V"){
	document.write("Vice-Chair of the <a href=ro.shtml>Rules and Operations Committee</a><br>");}
if (senate[ref][5]=="R"){
	document.write("Ranking Member of the <a href=ro.shtml>Rules and Operations Committee</a><br>");}
if (senate[ref][5]=="M"){
	document.write("Member of the <a href=ro.shtml>Rules and Operations Committee</a><br>");}

// Check for SOAR Status
if (senate[ref][6]=="C"){
	document.write("Chair of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");}
if (senate[ref][6]=="V"){
	document.write("Vice-Chair of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");}
if (senate[ref][6]=="R"){
	document.write("Ranking Member of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");}
if (senate[ref][6]=="M"){
	document.write("Member of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");}

// Check for GA Status
if (senate[ref][7]=="C"){
	document.write("Chair of the <a href=ga.shtml>Governmental Affairs Committee</a><br>");}
if (senate[ref][7]=="V"){
	document.write("Vice-Chair of the <a href=ga.shtml>Governmental Affairs Committee</a><br>");}
if (senate[ref][7]=="R"){
	document.write("Ranking Member of the <a href=ga.shtml>Governmental Affairs Committee</a><br>");}
if (senate[ref][7]=="M"){
	document.write("Member of the <a href=ga.shtml>Governmental Affairs Committee</a><br>");}

// Check for AP Status
if (senate[ref][8]=="C"){
	document.write("Chair of the <a href=app.shtml>Appropriations Committee</a><br>");}
if (senate[ref][8]=="V"){
	document.write("Vice-Chair of the <a href=app.shtml>Appropriations Committee</a><br>");}
if (senate[ref][8]=="R"){
	document.write("Ranking Member of the <a href=app.shtml>Appropriations Committee</a><br>");}
if (senate[ref][8]=="M"){
	document.write("Member of the <a href=app.shtml>Appropriations Committee</a><br>");}

// Footer
document.write("<br>",senate[ref][9],"</p>");
}







function coc()
{
	
var count = 0;
for (var loop = 0; loop <senate.length; loop++)
{
	if (senate[loop][9]=="C")
	{
		
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][1],">",senate[loop][0]," ",senate[loop][1]," - Senate Chair</a></td></tr>");
				count++;
	}
	
}

if (count==0){
document.write("<tr><td>Senate Chair has not been elected yet.</td></tr>");
}


var count = 0;
for (var loop = 0; loop <senate.length; loop++)
{
	if (senate[loop][9]=="V")
	{
		
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][1],">",senate[loop][0]," ",senate[loop][1]," - Senate Vice-Chair</a></td></tr>");
				count++;
	}
	
}

if (count==0){
document.write("<tr><td>Senate Vice-Chair has not been elected yet.</td></tr>");
}


	

	
var count = 0;
for (var loop = 0; loop <senate.length; loop++)
{
	if (senate[loop][9]=="M")
	{
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][1],">",senate[loop][0]," ",senate[loop][1],"</a> - ");
		if (senate[loop][5]=="C"){
			document.write("Chair of the <a href=ro.shtml>Rules and Operations Committee</a><br>");}																									
		if (senate[loop][7]=="C"){
			document.write("Chair of the <a href=ga.shtml>Governmental Affairs Committee</a><br>");}
		if (senate[loop][8]=="C"){
			document.write("Chair of the <a href=app.shtml>Appropriations Committee</a><br>");}
		if (senate[loop][6]=="C"){
			document.write("Chair of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");}
		document.write("</td></tr>");
		count++;
	}
	
}

if (count==0){
document.write("<tr><td>Committee Chairs have not been elected yet.</td></tr>");
}

var count = 0;
for (var loop = 0; loop <senate.length; loop++)
{
	if (senate[loop][9]=="A")
	{
		
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][1],">",senate[loop][0]," ",senate[loop][1]," - Chief Legislative Aid</a></td></tr>");
				count++;
	}
	
}

if (count==0){
document.write("<tr><td>Chief Legistlative Aid has not been selected yet.</td></tr>");
}



}
