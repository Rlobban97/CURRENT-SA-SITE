// JavaScript Document

// Senate is an array of arrays of the form:
	// [first name,last name,quad,email,senate status,RA,CEO,GO,App,CR,bio]
	// Where the status for the senate/committees are C,V,R,M for Chair, Vice Chair, Ranking
	// Member (Parlimentarian), Member or Non-member. Quads are coded A,C,D,I,S,E,F,O,L,T for
	// Alumni, Colonial, Dutch, Indian, State, Empire, Freedom, Off-campus, At-Large, or Terrace
	// P, B, H, G, Z  for aPplied/natural sciences, Business, Humanties, law/Govt, social scienceZ
	
	var senate=	[
["Albert","Greg","L","galbert@ualbanysa.org","C","N","N","N","N","No Biography on File","albert.jpg"],
["Kaufman","Ben","L","bkaufman@ualbanysa.org","M","N","N","C","N","N","No Biography on File","kaufman.jpg"],
["Forman","Rob","L","rforman@ualbanysa.org","M","N","C","N","N","N","No Biography on File","forman.jpg"],
["Rounds","Jenn","L","jrounds@ualbanysa.org","M","M","N","N","N","N","No Biography on File","rounds.jpg"],
["Leader","Stephanie","L","sleader@ualbanysa.org","M","N","N","N","R","N","No Biography on File","leader.jpg"],
["Rook","Roger","L","rrook@ualbanysa.org","M","N","N","M","N","N","No Biography on File","rook.jpg"],
["O'Shea","Dan","L","doshea@ualbanysa.org","M","M","N","N","N","N","No Biography on File","oshea.jpg"],
["Rivera","Nathalia","L","nrivera@ualbanysa.org","M","N","N","N","C","N","No Biography on File","rivera.jpg"],
["Bultman","Ulric","L","ubultman@ualbanysa.org","M","N","N","N","M","N","No Biography on File","bultman.jpg"],
["Optis","Michael","L","Moptis@gmail.com","M","N","N","M","N","N","No Biography on File","nophoto.jpg"],
["Turner","Justyn","L","jturner2@albany.edu","M","N","N","N","N","C","No Biography on File","nophoto.jpg"],
["Messmer","Joe","L","jmesssmer@albany.edu","M","M","N","N","N","N","No Biography on File","nophoto.jpg"],
["Bassell","Joseph","L","jbassell@albany.edu","M","C","N","N","N","N","No Biography on File","bassell.jpg"],
["Markisello","Daniel","P","dmarkisello@albany.edu","M","N","N","N","N","M","No Biography on File","nophoto.jpg"],
["Yahney","Jarret","B","jyahney@albany.edu","M","N","N","N","N","M","No Biography on File","nophoto.jpg"],
["Norman","Matthew","B","mnorman@albany.edu","M","N","N","M","N","N","No Biography on File","nophoto.jpg"],
["Agosto","Yashira","H","Yagosto@albany.edu","M","N","N","N","M","N","No Biography on File","nophoto.jpg"],
["Krupke","Eric","H","ekrupke@albany.edu","M","N","N","N","N","M","No Biography on File","nophoto.jpg"],
["Butler","Nick","G","nbutler2@albany.edu","M","M","N","N","N","N","No Biography on File","nophoto.jpg"],
["Krilovs","Tomass","G","tkrilovs@albany.edu","M","N","N","M","N","N","No Biography on File","nophoto.jpg"],
["Charles","Martine","Z","mcharles@albany.edu","M","N","N","N","M","N","No Biography on File","nophoto.jpg"],
["Weintraub","Lyle","Z","lweintraub@albany.edu","M","N","N","R","N","N","No Biography on File","nophoto.jpg"],
["Gray","Michael","O","mjgray@albany.edu","M","N","N","N","N","M","No Biography on File","nophoto.jpg"],
["Rogers","Ryan","O","rrogers@albany.edu","M","N","N","M","N","N","No Biography on File","nophoto.jpg"],
["Enti","Albert","O","aenti@albany.edu","M","N","N","N","N","M","No Biography on File","nophoto.jpg"],
["Mokbel","Ashraf","O","amokbel23@gmail.com","M","R","N","N","N","N","No Biography on File","nophoto.jpg"],
["DellaRagione","Nicole","O","ndellaragione@albany.edu","M","N","N","V","N","N","No Biography on File","nophoto.jpg"],
["Nelson","Christopher","O","cnelson@albany.edu","V","N","N","N","N","N","No Biography on File","nophoto.jpg"],
["Saunders","Steve","O","Ssaunders@albany.edu","M","N","N","N","M","N","No Biography on File","nophoto.jpg"],
["Brown","Christin","O","cmbrown@albany.edu","M","N","N","M","N","N","No Biography on File","nophoto.jpg"],
["Cohen","Marc","D","mjcohen2@yahoo.com","M","M","N","N","N","N","No Biography on File","nophoto.jpg"],
["Fanning","Brendan","D","brendanfanning3@gmai.com","M","N","N","N","N","M","No Biography on File","nophoto.jpg"],
["Snyder","Michael","C","Mtsnyder@albany.edu","M","N","N","N","M","N","No Biography on File","nophoto.jpg"],
["Ginsburg","Andrew","C","aginsburg@albany.edu","M","N","M","N","N","N","No Biography on File","nophoto.jpg"],
["Zieno","Jamie","I","Jpzieno@gmail.com","M","N","N","N","N","N","No Biography on File","nophoto.jpg"],
["Stanton","Lee","I","lstanton18@gmail.com","M","N","N","N","N","R","No Biography on File","nophoto.jpg"],
["Romero","Gabby","S","gromero@albany.edu","M","N","N","N","N","M","No Biography on File","nophoto.jpg"],
["Junquera","Brian","S","bjunquera@albany.edu","M","N","M","N","N","N","No Biography on File","nophoto.jpg"],
["Bressner","Rachael","F","rachel.bressner@gmail.com","M","N","N","N","M","N","No Biography on File","nophoto.jpg"],
["Hunt","Carly","F","Carly.hunt@hotmail.com","M","N","M","N","N","N","No Biography on File","nophoto.jpg"],
["Rojas","Catherine","A","crojas2@albany.edu","M","N","M","N","N","N","No Biography on File","nophoto.jpg"],
["Torres","Michael","A","mytorres@albany.edu","M","M","N","N","N","N","No Biography on File","nophoto.jpg"],
["Vargas","Jeff","E","javargas@albany.edu","M","N","N","M","N","N","No Biography on File","nophoto.jpg"],
["Umutesi","Sandra","E","sumutesi@albany.edu","M","N","N","N","M","N","No Biography on File","nophoto.jpg"],
["Flores","Rafael","T","Raflores@albany.edu","M","N","N","M","N","N","No Biography on File","nophoto.jpg"],
["Tavernier","Cassie","T","ctavernier@albany.edu","M","N","R","N","N","N","No Biography on File","nophoto.jpg"],

];


function masterlist(quad)
{

for (var loop = 0; loop <senate.length; loop++)
{
	if (senate[loop][2]==quad)
	{
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][0],">",senate[loop][1]," ",senate[loop][0],"</a></td></tr>");
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
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][0],">",senate[loop][1]," ",senate[loop][0]," - Chair</a></td></tr>");
				count++;
			}
		else
		{
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][0],">",senate[loop][1]," ",senate[loop][0]," - Chair</a></td></tr>");
				count++;
		}
	}
}
if (count==0){
document.write("<tr><td>Committee Chair has not been assigned yet.</td></tr>");
			}



var count = 0;
	if (ref==8)
	count=-1;
	for (var loop = 0; loop <senate.length; loop++)
	{
		if (senate[loop][ref]=="V")
			{
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][0],">",senate[loop][1]," ",senate[loop][0]," - Vice Chair</a></td></tr>");
				count++;

			}
	}
if (count==0){
 document.write("<!-- <tr><td>Vice Chair has not been assigned yet.</td></tr> -->");
 }


var count = 0;
	if (ref==8)
	count=-1;
for (var loop = 0; loop <senate.length; loop++)
{
	if (senate[loop][ref]=="R")
	{
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][0],">",senate[loop][1]," ",senate[loop][0]," - Ranking Member</a></td></tr>");
				count++;

	}
}
	
	if (count==0){
document.write("<tr><td>Ranking Member has not been assigned yet.</td></tr>");
}


var count = 0;
for (var loop = 0; loop <senate.length; loop++)
{
	if (senate[loop][ref]=="M")
	{
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][0],">",senate[loop][1]," ",senate[loop][0],"</a></td></tr>");
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

	if (senate[loop][0]==senator)
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
document.write("<h2>Senator ",senate[ref][1]," ",senate[ref][0],"</h2><p><img src=images/",senate[ref][11],"><br><a href=mailto:",senate[ref][3],">",senate[ref][3],"</a><br>Representing ");

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
if (senate[ref][2]=="T"){
	document.write("Liberty Terrace<br>");}
if (senate[ref][2]=="P"){
	document.write("the Applied and Natural Science Academic Division<br>");}
if (senate[ref][2]=="B"){
	document.write("the Business and Management Academic Division<br>");}
if (senate[ref][2]=="H"){
	document.write("the Humanities Academic Division<br>");}
if (senate[ref][2]=="G"){
	document.write("the Law and Government Academic Division<br>");}
if (senate[ref][2]=="Z"){
	document.write("the Social Sciences Academic Divison<br>");}

// Check for Senate Officer Status
if (senate[ref][4]=="C"){
	document.write("Chair of the Student Association Senate<br>");}
if (senate[ref][4]=="V"){
	document.write("Vice-Chair of the Student Association Senate<br>");}
if (senate[ref][4]=="R"){
	document.write("Parlimentarian of the Student Association Senate<br>");}

// Check for Rules Status
if (senate[ref][5]=="C"){
	document.write("Chair of the <a href=rules.shtml>Rules and Administration Committee</a><br>");}
if (senate[ref][5]=="V"){
	document.write("Senior Ranking Member of the <a href=rules.shtml>Rules and Administration Committee</a><br>");}
if (senate[ref][5]=="R"){
	document.write("Ranking Member of the <a href=rules.shtml>Rules and Administration Committee</a><br>");}
if (senate[ref][5]=="M"){
	document.write("Member of the <a href=rules.shtml>Rules and Administration Committee</a><br>");}

// Check for CEO Status
if (senate[ref][6]=="C"){
	document.write("Chair of the <a href=ceo.shtml>Community, Outreach, and Engagement Committee</a><br>");}
if (senate[ref][6]=="V"){
	document.write("Senior Ranking Member of the <a href=ceo.shtml>Community, Outreach, and Engagement Committee</a><br>");}
if (senate[ref][6]=="R"){
	document.write("Ranking Member of the <a href=ceo.shtml>Community, Outreach, and Engagement Committee</a><br>");}
if (senate[ref][6]=="M"){
	document.write("Member of the <a href=ceo.shtml>Community, Outreach, and Engagement Committee</a><br>");}

// Check for GO Status
if (senate[ref][7]=="C"){
	document.write("Chair of the <a href=go.shtml>Governmental Operations Committee</a><br>");}
if (senate[ref][7]=="V"){
	document.write("Senior Ranking Member of the <a href=go.shtml>Governmental Operations Committee</a><br>");}
if (senate[ref][7]=="R"){
	document.write("Ranking Member of the <a href=go.shtml>Governmental Operations Committee</a><br>");}
if (senate[ref][7]=="M"){
	document.write("Member of the <a href=go.shtml>Governmental Operations Committee</a><br>");}

// Check for Appropriations Status
if (senate[ref][8]=="C"){
	document.write("Chair of the <a href=app.shtml>Appropriations Committee</a><br>");}
if (senate[ref][8]=="V"){
	document.write("Senior Ranking Member of the <a href=app.shtml>Appropriations Committee</a><br>");}
if (senate[ref][8]=="R"){
	document.write("Ranking Member of the <a href=app.shtml>Appropriations Committee</a><br>");}
if (senate[ref][8]=="M"){
	document.write("Member of the <a href=app.shtml>Appropriations Committee</a><br>");}


// Check for Constituent Relations Status
if (senate[ref][9]=="C"){
	document.write("Chair of the <a href=cr.shtml>Constituent Relations Committee</a><br>");}
if (senate[ref][9]=="V"){
	document.write("Senior Ranking Member of the <a href=cr.shtml>Constituent Relations Committee</a><br>");}
if (senate[ref][9]=="R"){
	document.write("Ranking Member of the <a href=cr.shtml>Constituent Relations Committee</a><br>");}
if (senate[ref][9]=="M"){
	document.write("Member of the <a href=cr.shtml>Constituent Relations Committee</a><br>");}



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
if (senate[ref][2]=="T"){
	document.write("Liberty Terrace<br>");}
if (senate[ref][2]=="P"){
	document.write("the Applied and Natural Science Academic Division<br>");}
if (senate[ref][2]=="B"){
	document.write("the Business and Management Academic Division<br>");}
if (senate[ref][2]=="H"){
	document.write("the Humanities Academic Division<br>");}
if (senate[ref][2]=="G"){
	document.write("the Law and Government Academic Division<br>");}
if (senate[ref][2]=="Z"){
	document.write("the Social Sciences Academic Divison<br>");}
	
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
		
		document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][1],">",senate[loop][0]," ",senate[loop][1]," - Chief Legislative Aide</a></td></tr>");
				count++;
	}
	
}

if (count==0){
document.write("<tr><td>Chief Legistlative Aid has not been selected yet.</td></tr>");
}



}
