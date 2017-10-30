// JavaScript Document// Senate is an array of arrays of the form:
// [last name,first name,quad,email,senate status,RA,CEO,GO,App,CR,bio]
// Where the status for the senate/committees are C,V,R,M for Chair, Vice Chair, Ranking
// Member (Parlimentarian), Member or Non-member. Quads are coded A,C,D,I,S,E,F,O,L,T for
// Alumni, Colonial, Dutch, Indian, State, Empire, Freedom, Off-campus, At-Large, or Terrace
// P, B, H, G, Z  for aPplied/natural sciences, Business, Humanties, law/Govt, social scienceZ

var senate=	[
["Chowdhruy","Christian","P","cchowdhury@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Markisello","Daniel","P","dmarkisello@albany.edu","C","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Daniels","Neal","B","nldaniels@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Dushing","Sheldon","B","sdushing@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Kamins","Rachel ","H","rkamins@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Walsh","Caitlin","H","ctwalsh@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Flood","Alexander","G","arflood@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Schwab","Emma","G","eschwab@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Hershenson","Bradley","Z","bhershenson@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Yeates","Antonia ","Z","Ayeates2@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Beaton","Irwin ","L","ibeaton@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Bleck","Paul","L","pbleck@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Chin","Richard","L","rchin@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["De La Cruz","Stanley","L","sdelacruz@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Efekoro","Beroro","L","befekoro@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Faver","Alexandra","L","afaver@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Jegede","Ayomide","L","ajegde@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Jones","Kwame ","L","kjones6@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Okwuoha","Chima ","L","cokwuoha@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Roberts-Blake","Britanny ","L","broberts-blake@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Webb","Raymond","L","rwebb@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"]
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
        {
            ref=loop;
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
        document.write("Chief Legislative Aid<br>");
        return;
    }

    // Header
    document.write("<h2>Senator ",senate[ref][1]," ",senate[ref][0],"</h2><p><img src=images/",senate[ref][11],"><br><a href=mailto:",senate[ref][3],">",senate[ref][3],"</a><br>Representing ");
    // Print area representing
    if (senate[ref][2]=="I")
    {
        document.write("Indian Quad<br>");
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
    if (senate[ref][5]=="M"){	document.write("Member of the <a href=rules.shtml>Rules and Administration Committee</a><br>");}

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
    if (senate[ref][7]=="M"){	document.write("Member of the <a href=go.shtml>Governmental Operations Committee</a><br>");}

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

//function newbio(senator){    // Find the Senator's array reference    var ref=-1    for (var loop = 0; loop <senate.length; loop++){	if (senate[loop][1]==senator)	{		ref=loop;	}}if (ref<0){	document.write("<h2>Error - Invalid Senator</h2>");	return;}// Headerdocument.write("<h2>Senator ",senate[ref][0]," ",senate[ref][1],"</h2><p><img src=",senate[ref][1],".jpg class=senatorpic><br><a href=mailto:",senate[ref][3],">",senate[ref][3],"</a><br>Representing ");// Print area representingif (senate[ref][2]=="I"){	document.write("Indian Quad<br>");}if (senate[ref][2]=="S"){	document.write("State Quad<br>");}if (senate[ref][2]=="D"){	document.write("Dutch Quad<br>");}if (senate[ref][2]=="C"){	document.write("Colonial Quad<br>");}if (senate[ref][2]=="E"){	document.write("Empire Commons<br>");}if (senate[ref][2]=="F"){	document.write("Freedom Quad<br>");}if (senate[ref][2]=="O"){	document.write("Off-Campus Students<br>");}if (senate[ref][2]=="A"){	document.write("Alumni Quad<br>");}if (senate[ref][2]=="L"){	document.write("all students as an At-Large Senator<br>");}if (senate[ref][2]=="T"){	document.write("Liberty Terrace<br>");}if (senate[ref][2]=="P"){	document.write("the Applied and Natural Science Academic Division<br>");}if (senate[ref][2]=="B"){	document.write("the Business and Management Academic Division<br>");}if (senate[ref][2]=="H"){	document.write("the Humanities Academic Division<br>");}if (senate[ref][2]=="G"){	document.write("the Law and Government Academic Division<br>");}if (senate[ref][2]=="Z"){	document.write("the Social Sciences Academic Divison<br>");}	// Check for Senate Officer Statusif (senate[ref][4]=="C"){	document.write("Chair of the Student Association Senate<br>");}if (senate[ref][4]=="V"){	document.write("Vice-Chair of the Student Association Senate<br>");}if (senate[ref][4]=="R"){	document.write("Parlimentarian of the Student Association Senate<br>");}// Check for RO Statusif (senate[ref][5]=="C"){	document.write("Chair of the <a href=ro.shtml>Rules and Administraions Committee</a><br>");}if (senate[ref][5]=="V"){	document.write("Vice-Chair of the <a href=ro.shtml>Rules and Administration Committee</a><br>");}if (senate[ref][5]=="R"){	document.write("Ranking Member of the <a href=ro.shtml>Rules and Administration Committee</a><br>");}if (senate[ref][5]=="M"){	document.write("Member of the <a href=ro.shtml>Rules and Administration Committee</a><br>");}// Check for SOAR Statusif (senate[ref][6]=="C"){	document.write("Chair of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");}if (senate[ref][6]=="V"){	document.write("Vice-Chair of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");}if (senate[ref][6]=="R"){	document.write("Ranking Member of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");}if (senate[ref][6]=="M"){	document.write("Member of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");}// Check for GA Statusif (senate[ref][7]=="C"){	document.write("Chair of the <a href=ga.shtml>Governmental Operations Committee</a><br>");}if (senate[ref][7]=="V"){	document.write("Senior Ranking Member of the <a href=ga.shtml>Governmental Operations Committee</a><br>");}if (senate[ref][7]=="R"){	document.write("Ranking Member of the <a href=ga.shtml>Governmental Operations Committee</a><br>");}if (senate[ref][7]=="M"){	document.write("Member of the <a href=ga.shtml>Governmental Operations Committee</a><br>");}// Check for AP Statusif (senate[ref][8]=="C"){	document.write("Chair of the <a href=app.shtml>Appropriations Committee</a><br>");}if (senate[ref][8]=="V"){	document.write("Vice-Chair of the <a href=app.shtml>Appropriations Committee</a><br>");}if (senate[ref][8]=="R"){	document.write("Ranking Member of the <a href=app.shtml>Appropriations Committee</a><br>");}if (senate[ref][8]=="M"){	document.write("Member of the <a href=app.shtml>Appropriations Committee</a><br>");}// Footerdocument.write("<br>",senate[ref][9],"</p>");}


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
    if (count==0)
    {
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
    if (count==0)
    {
        document.write("<tr><td>Senate Vice-Chair has not been elected yet.</td></tr>");
    }
    var count = 0;
    for (var loop = 0; loop <senate.length; loop++)
    {
        if (senate[loop][9]=="M")
        {
            document.write("<tr><td><a href=senator.shtml?senator=",senate[loop][1],">",senate[loop][0]," ",senate[loop][1],"</a> - ");
            if (senate[loop][5]=="C")
            {
                document.write("Chair of the <a href=ro.shtml>Rules and Operations Committee</a><br>");
            }
            if (senate[loop][7]=="C")
            {
                document.write("Chair of the <a href=ga.shtml>Governmental Affairs Committee</a><br>");
            }
            if (senate[loop][8]=="C")
            {
                document.write("Chair of the <a href=app.shtml>Appropriations Committee</a><br>");
            }
            if (senate[loop][6]=="C")
            {
                document.write("Chair of the <a href=soar.shtml>Student Outreach, Accountability, and Rights Committee</a><br>");
            }
            document.write("</td></tr>");
            count++;
        }
    }
    if (count==0)
    {
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
    if (count==0)
    {
        document.write("<tr><td>Chief Legistlative Aid has not been selected yet.</td></tr>");
    }
}
