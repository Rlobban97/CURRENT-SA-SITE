// JavaScript Document
// Senate is an array of arrays of the form:

// [last name,first name,quad,email,senate status,RA,CEO,GO,App,CR,bio]

// Where the status for the senate/committees are C,V,R,M for Chair, Vice Chair, Ranking

// Member (Parlimentarian), Member or Non-member. Quads are coded A,C,D,I,S,E,F,O,L,T,Y for

// Alumni, Colonial, Dutch, Indian, State, Empire, Freedom, Off-campus, At-Large, or Terrace

// P, B, H, G, Z  for aPplied/natural sciences, Business, Humanties, law/Govt, social scienceZ, first Year student



var senate=	[
["Abreu","Felix","P","fabreau@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Agnes","Anna","S","aagnes@albany.edu","M","N","N","R","N","N","No Biography On File","nophoto.jpg"],
["Alford","Julia","L","jalford@albany.edu","M","C","N","N","N","N","No Biography On File","nophoto.jpg"],
["Altilio","Jarrett","L","jaltilio@albany.edu","V","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Asiedu","William","L","wasiedu@albany.edu","M","N","R","N","N","N","No Biography On File","nophoto.jpg"],
["Bradley","Stephany","L","sbradley2@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Byam","Amanda","O","abyam@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Cadesca","Langie","I","lcadesca@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Carrasco","Maria","I","mcarrasco@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Chowdhruy","Christian","P","cchowdhury@albany.edu","M","N","N","N","C","N","No Biography On File","nophoto.jpg"],
["Dunleavy","Conner","L","cdunleavy@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Edwards","Lela","C","ledwards@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Evanson","Destin","O","devanson@albany.edu","M","N","N","V","N","N","No Biography On File","nophoto.jpg"],
["Fowler","Abigail","A","afowler@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Frempong","Roselynn","A","rfrempong@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Garcia","Bryan","D","bmgarcia@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Gareau","Patrick","O","pgareau@albany.edu","M","N","C","N","N","N","No Biography On File","nophoto.jpg"],
["Gonzalez","Maria","T","mgonzalez5@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Guerra","Jillian","O","jguerra@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Hershenson","Bradley","Z","bhershenson@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Heslop","Winston","L","wheslop@albany.edu","M","N","N","C","N","N","No Biography On File","nophoto.jpg"],
["Holdridge","Brandon","N","bholdridge@albany.edu","N","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Hoyt","Griffin","L","ghoyt@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Hyppolite","Hans","O","hhyppolite@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Kelly","Jaime","O","jkelly@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Levit","Rachel","Z","rlevit@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Luke","Blossom","O","bluke@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Mosby","Melissa","L","mmosby@albany.edu","M","N","N","N","N","C","No Biography On File","nophoto.jpg"],
["Muniz","Reynaldo","O","rmuniz@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Navarro","Keyla","F","knavarro@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Ogarro","Richard","L","rogarro@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Ortega","Brian","S","bortega@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Ortega","Christopher","F","cortega2@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Ostro","Austin","E","aostro@albany.edu","M","R","N","N","N","N","No Biography On File","nophoto.jpg"],
["Petrak","Sarah","T","spetrak@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Perez-Mayfield","Jacinda","G","jperez-mayfield@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Powell","Taylor","Y","tspowell@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Santos","Coral","H","csantos2@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Shapiro","Jeffery","H","jshapiro2@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Shayo","Adam","D","ashayo@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["St-Hubert","Zacharie","C","zst-hubert@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Tasnim","Subha","Y","stasnim@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Terezakis","Alexander","L","aterezakis@albany.edu","M","N","N","N","R","N","No Biography On File","nophoto.jpg"],
["Toranzo","Andrew","B","atoranzo@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Voss","Nicholas","E","nvoss@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Webb","Raymond","G","rwebb@albany.edu","C","N","N","N","N","N","No Biography On File","nophoto.jpg"]
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
    
if (count==0)
    
{
        
document.write("<tr><td>Committee Chair has not been assigned yet.</td></tr>");
    
}




    
var count = 0;
    
if (ref==8)	
count=-1;
   
 for (var loop = 0; loop <senate.length; loop++)
    
{
        
if (senate[loop][ref]=="V")
        
{
            
document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][0],">",senate[loop][1]," ",senate[loop][0]," - Senior Ranking Member</a></td></tr>");
            
count++;
        
}
    
}
    
if (count==0)
    
{
        
document.write("<!-- <tr><td>Vice Chair has not been assigned yet.</td></tr> -->");
    
}

    
var count = 0;
    
//if (ref==8)	
count=-1;
    
for (var loop = 0; loop <senate.length; loop++)
    
{
        
if (senate[loop][ref]=="R")
        
{
            
document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][0],">",senate[loop][1]," ",senate[loop][0]," - Ranking Member</a></td></tr>");
            
count++;
        
}
    
}
    
if (count==0)
    
{
        
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
    
if (count==0)
    
{
        
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

		{       ref=loop;
        }

	}

	if (ref<0)

	{
        document.write("<h2>Error - Invalid Senator</h2>");
        return;
    }



	//Leg Aid

	if (senate[ref][2]=="N")

	{

		document.write("<h2>",senate[ref][0]," ",senate[ref][1],"</h2><p><a href=mailto:",senate[ref][3],">",senate[ref][3],"</a><br>");

		document.write("Secretary<br>");

		return;

	}


	// Header

	document.write("<h2>Senator ",senate[ref][1]," ",senate[ref][0],"</h2><p><img src=images/",senate[ref][11],"><br><a href=mailto:",senate[ref][3],">",senate[ref][3],"</a><br>Representing ");

	// Print area representing

	if (senate[ref][2]=="I")
    {    document.write("Indian Quad<br>");
    }

	if (senate[ref][2]=="S")
    {
    document.write("State Quad<br>");
    }

	if (senate[ref][2]=="D")
    {
    document.write("Dutch Quad<br>");
    }

	if (senate[ref][2]=="C")
    {
    document.write("Colonial Quad<br>");
    }

	if (senate[ref][2]=="E")
    {
    document.write("Empire Commons<br>");
    }

	if (senate[ref][2]=="F")
    {
    document.write("Freedom Quad<br>");
    }

	if (senate[ref][2]=="O")
    {
    document.write("Off-Campus Students<br>");
    }

	if (senate[ref][2]=="A")
    {
    document.write("Alumni Quad<br>");
    }

	if (senate[ref][2]=="L")
    {
    document.write("all students as an At-Large Senator<br>");
    }

	if (senate[ref][2]=="T")
    {
    document.write("Liberty Terrace<br>");
    }

	if (senate[ref][2]=="P")
    {
    document.write("the Applied and Natural Science Academic Division<br>");
    }

	if (senate[ref][2]=="B")
    {
    document.write("the Business and Management Academic Division<br>");
    }

	if (senate[ref][2]=="H")
    {
    document.write("the Humanities Academic Division<br>");
    }

	if (senate[ref][2]=="G")
    {
    document.write("the Law and Government Academic Division<br>");
    }

	if (senate[ref][2]=="Y")
    {
    document.write("First-Year Students<br>");
    }

	if (senate[ref][2]=="Z")
    {
    document.write("the Social Sciences Academic Divison<br>");
    }


	// Check for Senate Officer Status

	if (senate[ref][4]=="C")
    {	document.write("Chair of the Student Association Senate<br>");}

	if (senate[ref][4]=="V")
    {	document.write("Vice-Chair of the Student Association Senate<br>");}

	if (senate[ref][4]=="R")
    {	document.write("Parlimentarian of the Student Association Senate<br>");}


	// Check for Rules Status

	if (senate[ref][5]=="C")
    {	document.write("Chair of the <a href=rules.shtml>Rules and Administration Committee</a><br>");}

	if (senate[ref][5]=="V")
    {	document.write("Senior Ranking Member of the <a href=rules.shtml>Rules and Administration Committee</a><br>");}

	if (senate[ref][5]=="R")
    {	document.write("Ranking Member of the <a href=rules.shtml>Rules and Administration Committee</a><br>");}

	if (senate[ref][5]=="M")    {	document.write("Member of the <a href=rules.shtml>Rules and Administration Committee</a><br>");}


	// Check for CEO Status

	if (senate[ref][6]=="C")
    {	document.write("Chair of the <a href=ceo.shtml>Community Engagement and Outreach Committee</a><br>");}

	if (senate[ref][6]=="V")
    {	document.write("Senior Ranking Member of the <a href=ceo.shtml>Community Engagement and Outreach Committee</a><br>");}

	if (senate[ref][6]=="R")
    {	document.write("Ranking Member of the <a href=ceo.shtml>Community Engagement and Outreach Committee</a><br>");}

	if (senate[ref][6]=="M")
    {	document.write("Member of the <a href=ceo.shtml>Community Engagement and Outreach Committee</a><br>");}


	// Check for GO Status

	if (senate[ref][7]=="C")
    {	document.write("Chair of the <a href=go.shtml>Governmental Operations Committee</a><br>");}

	if (senate[ref][7]=="V")
    {	document.write("Senior Ranking Member of the <a href=go.shtml>Governmental Operations Committee</a><br>");}

	if (senate[ref][7]=="R")
    {	document.write("Ranking Member of the <a href=go.shtml>Governmental Operations Committee</a><br>");}

	if (senate[ref][7]=="M")    {	document.write("Member of the <a href=go.shtml>Governmental Operations Committee</a><br>");}


	// Check for Appropriations Status

	if (senate[ref][8]=="C")
    {	document.write("Chair of the <a href=app.shtml>Appropriations Committee</a><br>");}

	if (senate[ref][8]=="V")
    {	document.write("Senior Ranking Member of the <a href=app.shtml>Appropriations Committee</a><br>");}

	if (senate[ref][8]=="R")
    {	document.write("Ranking Member of the <a href=app.shtml>Appropriations Committee</a><br>");}

	if (senate[ref][8]=="M")
    {	document.write("Member of the <a href=app.shtml>Appropriations Committee</a><br>");}


	// Check for Constituent Relations Status

	if (senate[ref][9]=="C")
    {	document.write("Chair of the <a href=cr.shtml>Constituent Relations Committee</a><br>");}

	if (senate[ref][9]=="V")
    {	document.write("Senior Ranking Member of the <a href=cr.shtml>Constituent Relations Committee</a><br>");}

	if (senate[ref][9]=="R")
    {	document.write("Ranking Member of the <a href=cr.shtml>Constituent Relations Committee</a><br>");}

	if (senate[ref][9]=="M")
    {	document.write("Member of the <a href=cr.shtml>Constituent Relations Committee</a><br>");}


	// Footer

	document.write("</p>");


	
}






