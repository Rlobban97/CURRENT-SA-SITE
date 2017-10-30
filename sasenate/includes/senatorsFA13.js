// JavaScript Document// Senate is an array of arrays of the form:
// [last name,first name,quad,email,senate status,RA,CEO,GO,App,CR,bio]
// Where the status for the senate/committees are C,V,R,M for Chair, Vice Chair, Ranking
// Member (Parlimentarian), Member or Non-member. Quads are coded A,C,D,I,S,E,F,O,L,T for
// Alumni, Colonial, Dutch, Indian, State, Empire, Freedom, Off-campus, At-Large, or Terrace
// P, B, H, G, Z  for aPplied/natural sciences, Business, Humanties, law/Govt, social scienceZ

var senate=	[
["Witte","Ryan","L","rwitte@albany.edu","C","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Alic","Haris","L","halic@albany.edu","M","N","N","N","N","R","No Biography On File","nophoto.jpg"],
["DeAngelo","Skyler","L","sdeangelo@albany.edu","M","R","N","N","N","N","No Biography On File","nophoto.jpg"],
["Forman","Robert","L","rforman@albany.edu","M","N","C","N","N","N","No Biography On File","nophoto.jpg"],
["Schwab","Emma","L","eschwab@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["King","James","L","jaking@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Efekoro","Beroro","L","befekoro@albany.edu","M","N","R","N","N","N","No Biography On File","nophoto.jpg"],
["Gray","Michael","L","mjgray@albany.edu","M","N","N","V","N","N","No Biography On File","nophoto.jpg"],
["Shen","Juliet","L","jshen3@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Webb","Raymond","L","rwebb@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Dunleavy","Connor","L","cdunleavy@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Alicea","Victor","L","valicea@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Zieno","Jamie","L","jzieno@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Abraham","Finney","H","fabraham@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Wilkins","Connor","H","cwilkins@albany.edu","M","N","N","C","N","N","No Biography On File","nophoto.jpg"],
["Russell","Brittany","B","brussell@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Longo","Michael","B","mflongo@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Krush","Matthew","Z","mkrush@albany.edu","V","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Caravello","Devin","Z","dcaravello@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Markisello","Daniel","P","dmarkisello@albany.edu","M","C","N","N","N","N","No Biography On File","nophoto.jpg"],
["Chowdhury","Christian","P","cchowdhury@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Cronin","Patrick","G","pjcronin@albany.edu","M","N","N","N","N","C","No Biography On File","nophoto.jpg"],
["Rook","Roger","G","rrook@albany.edu","M","N","N","N","C","N","No Biography On File","nophoto.jpg"],
["Faver","Allie","F","afaver@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Moran","Patrick","F","pmoran@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Rood","Jonathan","T","jrood@albany.edu","M","N","M","N","M","N","No Biography On File","nophoto.jpg"],
["Ripka","Zachary","T","zrikpa@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Sanzone","Adam","A","asanzone@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Murphy","Kevin","A","kjmurphy@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Olszewski","Casey","E","colszewski@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Gustave","Roevelle","E","rgustave@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Salamy","Vanessa","I","vsalamy@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Hershenson","Bradley","I","bhershenson@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Flood","Alex","S"," arflood@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Augustin","Stephanie","C","saugustine@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Belkin","Nada","C","nbelkin@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Ramnath","Shireen","D"," sramnath@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Cuevas","Khadija","D","kcuevas2@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Carmello","Corey","O","ccarmello@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Martell-Crawford","Cylas","O","cmartell-crawford@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Orlan","Cassie","O","corlan@albany.edu","M","N","N","N","R","N","No Biography On File","nophoto.jpg"],
["Henderson","Cenaniah","O","cchenderson@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Balzano","Anthony","O","anthonyjbalzano@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["DeLaCruz","Stanley","O","sdelacruz@albany.edu","M","N","N","M","M","N","No Biography On File","nophoto.jpg"],
["Engwer","Benjamin","O","bengwer@albany.edu","M","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["McBride","Paul","O","pmcbride@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"]
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
