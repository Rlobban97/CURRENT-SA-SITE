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
["Burgos","Kenneth","B","kburgos@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Byam","Amanda","O","abyam@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Cadesca","Langie","I","lcadesca@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Carrasco","Maria","I","mcarrasco@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Chowdhruy","Christian","P","cchowdhury@albany.edu","M","N","N","N","C","N","No Biography On File","nophoto.jpg"],
["Daniels","Neal","L","nldaniels@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Dunleavy","Conner","L","cdunleavy@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Durma","Kim","L","kdurma@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
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
["Martinez","Shantalee","L","smartinez@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Mosby","Melissa","L","mmosby@albany.edu","M","N","N","N","N","C","No Biography On File","nophoto.jpg"],
["Muniz","Reynaldo","O","rmuniz@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Navarro","Keyla","F","knavarro@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Ogarro","Richard","L","rogarro@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Ortega","Brian","S","bortega@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Ortega","Christopher","F","cortega2@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Ostro","Austin","E","aostro@albany.edu","M","R","N","N","N","N","No Biography On File","nophoto.jpg"],
["Petrak","Sarah","T","spetrak@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Powell","Taylor","Y","tspowell@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Poy","Beny","D","bpoy@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Santos","Coral","H","csantos2@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["St-Hubert","Zacharie","C","zst-hubert@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Tasnim","Subha","Y","stasnim@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Terezakis","Alexander","L","aterezakis@albany.edu","M","N","N","N","R","N","No Biography On File","nophoto.jpg"],
["Toranzo","Andrew","B","atoranzo@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Voss","Nicholas","E","nvoss@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Webb","Raymond","G","rwebb@albany.edu","C","N","N","N","N","N","No Biography On File","nophoto.jpg"]
];




var votingrecord=[
["Bill",""],
["Description",""],
["Abreu",""],
["Alford",""],
["Alic",""],
["Altilio",""],
["Asiedu",""],
["Bradley",""],
["Burgos",""],
["Chowdhury",""],
["Cronin",""],
["Daniels",""],
["Dunleavy",""],
["Durma",""],
["Hershenson",""],
["Heslop",""],
["Hoyt",""],
["Mamone",""],
["Martinez",""],
["Mosby",""],
["Ogarro",""],
["Santos",""],
["Terezakis",""],
["Toranzo",""],
["Webb",""]
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
    if (ref==8)	count=-1;
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
    //if (ref==8)	count=-1;
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


	//Voting Record
        // Find the Senator's array reference in votingrecord

	var ref2=-1

	for (var loop2 = 0; loop2 <votingrecord.length; loop2++)

	{

		if (votingrecord[loop2][0]==senator)

		{

			ref2=loop2;
		        //Senator is in row ref2

		}

	}

	if (ref2<0)

	{
       document.write("<h2>Error - Senator Voting Record Not Found</h2>");
        return;
    }

    	document.write("<h3>Voting Record for Senator ",votingrecord[ref2][0],"</h3>")

	document.write("<table border=2><tr><td><strong>Bill</strong></td><td><strong>Bill Description</strong></td><td><strong>Vote</strong></td></tr>");
	for (var loop = 1; loop <votingrecord[0].length; loop++)
    	{
            if (votingrecord[0][loop] == undefined) { break; }
            if (loop%2 == 0) {document.write("<tr>");}
            else {document.write("<tr class='even'>");}

            document.write("<td>1415-",votingrecord[0][loop],"</td><td><a href=billresult.shtml?bill=",votingrecord[0][loop],">",votingrecord[1][loop],"</a></td><td>");
            if (votingrecord[ref2][loop]=="Y")
            	{document.write("<font color=green>Voted YES</font>");}
            else if (votingrecord[ref2][loop]=="N")
                {document.write("<font color=red>Voted NO</font>");}
            else if (votingrecord[ref2][loop]=="NP")
                {document.write("<font color=black>Not Present</font>");}
            else if (votingrecord[ref2][loop]=="Table")
                {document.write("<font color=black>Bill Tabled</font>");}
            else if (votingrecord[ref2][loop]=="W")
                {document.write("<font color=black>Bill Withdrawn</font>");}
            else if (votingrecord[ref2][loop]=="A")
                {document.write("<font color=black>Abstained from voting</font>");}
            else if (votingrecord[ref2][loop]=="NY")
                {document.write("<font color=black>Not yet a Senator at time of vote</font>");}
            else if (votingrecord[ref2][loop]=="NS")
                {document.write("<font color=black>Not a Senator at time of vote</font>");}
            else if (votingrecord[ref2][loop]=="NL")
                {document.write("<font color=black>No longer a Senator at time of vote</font>");}
            else if (votingrecord[ref2][loop]=="UC")
                {document.write("<font color=green>Passed by U/C</font>");}
            else if (votingrecord[ref2][loop]=="Voice")
                {document.write("Voice Vote Taken");}
            else {document.write("Error - no data")}

	}
	document.write("</td></tr></table>");
}








function billresult(bill)

{
	// Find the Bill's array refrence

	var ref=-1
	for (var loop = 0; loop <votingrecord[0].length; loop++)

	{

		if (votingrecord[0][loop]==bill)

		{

			ref=loop;
			//Bill is in column ref


		}

	}

	if (ref<0)

	{

		document.write("<h2>Error - Invalid Bill</h2>");

		return;

	}





	document.write("<p><h2><a href=http://www.albany.edu/sasenate/docs1415/1415-",votingrecord[0][ref],".docx>Bill 1415-",votingrecord[0][ref],"</a></h2><a href=http://www.albany.edu/sasenate/docs1415/1415-",votingrecord[0][ref],".docx>",votingrecord[1][ref],"</a><BR>");

	document.write("<BR><table border=2><tr><td><strong>Senator</strong></td><td><strong>Vote:</strong></td></tr>")
	for (var loop = 2; loop <votingrecord.length; loop++)
    	{
		document.write("<tr><td><a href=senator.shtml?senator=",votingrecord[loop][0],">",votingrecord[loop][0],"</a></td><td>");
		if (votingrecord[loop][ref]=="Y")
			{document.write("<font color=green>Voted YES</font>");}
		else if (votingrecord[loop][ref]=="N")
			{document.write("<font color=red>Voted NO</font>");}
		else if (votingrecord[loop][ref]=="W")
			{document.write("<font color=red>Bill Withdrawn</font>");}
		else if (votingrecord[loop][ref]=="NP")
			{document.write("<font color=black>Not Present</font>");}
		else if (votingrecord[loop][ref]=="Table")
			{document.write("<font color=black>Bill Tabled</font>");}
		else if (votingrecord[loop][ref]=="A")
			{document.write("<font color=black>Abstained from voting</font>");}
		else if (votingrecord[loop][ref]=="NS")
			{document.write("<font color=black>Not a Senator at time of vote</font>");}
		else if (votingrecord[loop][ref]=="NY")
			{document.write("<font color=black>Not yet a Senator at time of vote</font>");}
		else if (votingrecord[loop][ref]=="NL")
			{document.write("<font color=black>No longer a Senator at time of vote</font>");}
		else if (votingrecord[loop][ref]=="UC")
			{document.write("<font color=green>Passed by U/C</font>");}
		else {document.write("Error - no data")}
		document.write("</td></tr>");
	}
	document.write("</table>");











	document.write("</p>");

}




function listbills()
{
	document.write("<table border=2><tr><td><strong>Bill</strong></td><td><strong>Bill Description</strong></td><td><strong>Voting Results</strong></td></tr>");
	for (var loop = 1; loop <votingrecord[0].length; loop++)
    	{
		if (votingrecord[0][loop] == undefined) break;
		if(loop%2 == 0) {document.write("<tr>");}
		else {document.write("<tr class='even'>");}
		document.write("<td>1415-",votingrecord[0][loop],"</td><td><a href=docs1415/1415-",votingrecord[0][loop],".docx>",votingrecord[1][loop],"</a></td><td><a href=billresult.shtml?bill=",votingrecord[0][loop],">Voting Results</a></td></tr>");



	}
	document.write("</table>");
}
