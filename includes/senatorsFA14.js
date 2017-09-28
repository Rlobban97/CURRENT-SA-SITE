// JavaScript Document
// Senate is an array of arrays of the form:

// [last name,first name,quad,email,senate status,RA,CEO,GO,App,CR,bio]

// Where the status for the senate/committees are C,V,R,M for Chair, Vice Chair, Ranking

// Member (Parlimentarian), Member or Non-member. Quads are coded A,C,D,I,S,E,F,O,L,T for

// Alumni, Colonial, Dutch, Indian, State, Empire, Freedom, Off-campus, At-Large, or Terrace

// P, B, H, G, Z  for aPplied/natural sciences, Business, Humanties, law/Govt, social scienceZ



var senate=	[

["Altilio","Jarrett","S","jaltilio@albany.edu","M","N","N","N","R","N","No Biography On File","nophoto.jpg"],
["Baer","Kelly","T","kbaer@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Beaton","Irwin","L","ibeaton@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Bleck","Paul","L","pbleck@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Cabral","Jean","L","jcabral@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Cassidy","Alexandria","A","acassidy@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Chin","Richard","L","rchin@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Chowdhury","Christian","P","cchowdhury@albany.edu","M","N","N","N","C","N","No Biography On File","nophoto.jpg"],
["Conroy","Jack","C","jconroy@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Crepsac","Jhan","D","jcrepsac@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Daniels","Neal","B","nldaniels@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["DeLaCruz","Stanley","L","sdelacruz@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Domberg","Aleksander","O","adomberg@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Dunleavy","Conner","F","cdunleavy@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Dushing","Sheldon","B","sdushing@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Eager","Rachel","S","reager@albany.edu","M","N","N","N","N","R","No Biography On File","nophoto.jpg"],
["Efekoro","Beroro","L","befekoro@albany.edu","M","N","C","N","N","N","No Biography On File","nophoto.jpg"],
["Evanson","Destin","O","devanson@albany.edu","M","N","N","R","N","N","No Biography On File","nophoto.jpg"],
["Faver","Alexandra","L","afaver@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Flood","Alexander","G","arflood@albany.edu","M","N","N","N","N","C","No Biography On File","nophoto.jpg"],
["George","Sarina","T","sgeorge5@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Henderson","Chenaniah","E","cchenderson@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Hershenson","Bradley","Z","bhershenson@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Jegede","Ayomide","L","ajegede@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Jones","Kwame","L","kjones6@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Kamins","Rachel","H","rkamins@albany.edu","M","N","R","N","N","N","No Biography On File","nophoto.jpg"],
["Kosinski","Leah","F","lkosinski@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Lugo","Taina","O","tlugo@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Maldonado","Elizabeth","O","emaldonado2@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Mallon","Daniel","O","dpmallon@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Markisello","Daniel","P","dmarkisello@ualbanysa.org","C","N","N","N","N","N","No Biography On File","nophoto.jpg"],
["Melse","Benedict","I","bmelse@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Nwankwor","Igwe","L","inwankwor@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Nwike","Uchenna","E","unwike@albany.edu","M","N","N","N","M","N","No Biography On File","nophoto.jpg"],
["Okwuoha","Chima","L","cokwuoha@albany.edu","M","N","M","N","N","N","No Biography On File","nophoto.jpg"],
["Planty","Vanessa","O","vplanty@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Roberts-Blake","Britanny","L","broberts-blake@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Sanzone","Adam","A","asanzone@albany.edu","M","C","N","N","N","N","No Biography On File","nophoto.jpg"],
["Schwab","Emma","G","eschwab@albany.edu","M","R","N","N","N","N","No Biography On File","nophoto.jpg"],
["Sepulveda","Kelly","O","ksepulveda@albany.edu","M","M","N","N","N","N","No Biography On File","nophoto.jpg"],
["Sippin","Benjamin","I","bsippin@albany.edu","M","N","N","M","N","M","No Biography On File","nophoto.jpg"],
["Stricoff","Jonathan","O","jstricoff@albany.edu","M","N","N","V","N","N","No Biography On File","nophoto.jpg"],
["Terezakis","Alexander","D","aterezakis@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"],
["Walsh","Caitlin","H","ctwalsh@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Webb","Raymond","L","rwebb@albany.edu","M","C","N","N","N","N","No Biography On File","nophoto.jpg"],
["Yeates","Antonia","Z","ayeates2@albany.edu","M","N","N","M","N","N","No Biography On File","nophoto.jpg"],
["Zhao","Ashley","C","azhao4@albany.edu","M","N","N","N","N","M","No Biography On File","nophoto.jpg"]
];



var votingrecord=[
["Bill","026","027","028","029R","030","031","032R","033","034","035","036","037","038","039","040R","041","042","043","044","045","046R","047","048","049","050","051","052","053","054","055","056"],
["Description","Appointing Bianca Rajpersaud Programming Director","Appointing Jill Reichel to the UAS Board","Appointing Mackenzie Rinefierd Comptroller","Resolution on Voter Registration","Appointing Robert Warshauer Deputy Comproller","Appointing Roneyka Anthony Deputy Comptroller","Resolution on the DREAM Act","Appointing Lynn Keating to the Board of Finance","Appointing Habeeb Fayumide to the Board of Finance","Appointing Shireen Ramnath to the Board of Finance","Appointing Stanley De La Cruz to the Board of Finance","Appointing Ryan Webb to the Board of Finance","Appointing Christian Chowdhruy to the Board of Finance","Approval of the SA Senate Committee Structure","Resolution in Support of a Empire Commons Bus Stop","Appointments to the Ethics Committee","Attendance Policy","National Organization on Global Education","Appropriations to ProjectU","Appropriations to UAlbany Swim Club","Resolution Honoring Christine Bouchard","Appropriations to the Korean Student Association","Appropriations to The Inklings","Presidential Censure","Appropriations to the Taekwando Club","Appointment of the Director of Marketing- Teklu","Appropriations to Albany ACM","Appropriations to the UA Musical Theatre Association","Appropriations to UA Nasha","Appropriations to the Marketing Department","Committee Appointments"],
["Altilio","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Baer","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Beaton","UC","Y","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Bleck","UC","NP","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Cabral","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Cassidy","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Chin","UC","Y","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Chowdhury","UC","NP","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Conroy","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","Y","UC","UC","UC","UC","UC","UC","UC"],
["Crepsac","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Daniels","UC","Y","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["DeLaCruz","UC","Y","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Domberg","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Dunleavy","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","Y","UC","UC","UC","UC","UC","UC","UC"],
["Dushing","UC","Y","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Eager","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Efekoro","UC","Y","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Evanson","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Faver","UC","NP","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Flood","UC","NP","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["George","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Henderson","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","A","UC","UC","UC","UC","UC","UC","UC"],
["Hershenson","UC","NP","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Jegede","UC","Y","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Jones","UC","Y","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Kamins","UC","Y","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Kosinski","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","Y","UC","UC","UC","UC","UC","UC","UC"],
["Lugo","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","Y","UC","UC","UC","UC","UC","UC","UC"],
["Maldonado","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","Y","UC","UC","UC","UC","UC","UC","UC"],
["Mallon","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","A","UC","UC","UC","UC","UC","UC","UC"],
["Markisello","UC","A","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","A","UC","UC","UC","A","UC","UC","UC","UC","UC","UC","UC"],
["Melse","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Nwankwor","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Nwike","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Okwuoha","UC","NP","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Planty","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Roberts-Blake","UC","NP","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Sanzone","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","Y","UC","UC","UC","UC","UC","UC","UC"],
["Schwab","UC","Y","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Sepulveda","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","N{","UC","UC","UC","UC","UC","UC","UC"],
["Sippin","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","A","UC","UC","UC","UC","UC","UC","UC"],
["Stricoff","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Terezakis","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","A","UC","UC","UC","UC","UC","UC","UC"],
["Walsh","UC","Y","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","Y","UC","UC","UC","UC","UC","UC","UC"],
["Webb","UC","Y","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"],
["Yeates","UC","Y","UC","UC","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","NP","UC","UC","UC","NP","UC","UC","UC","UC","UC","UC","UC"],
["Zhao","NP","NP","NP","NP","UC","UC","Table","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","UC","Y","UC","UC","UC","N","UC","UC","UC","UC","UC","UC","UC"]
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


    //Voting Record

        // Find the Senator's array reference in votingrecord
    var ref2=-1
    for (var loop = 0; loop <votingrecord.length; loop++)
    {
        if (votingrecord[loop][0]==senator)
        {
            ref2=loop;
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
	for (var loop = 1; loop <votingrecord.length; loop++)
    	{
            if (votingrecord[0][loop] == undefined) break;
            if(loop%2 == 0) {document.write("<tr>");}
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
                else if (votingrecord[ref2][loop]=="A")
                    {document.write("<font color=black>Abstained from voting</font>");}
                else if (votingrecord[ref2][loop]=="NS")
                    {document.write("<font color=black>Not a Senator at time of vote</font>");}
                else if (votingrecord[ref2][loop]=="UC")
                    {document.write("<font color=green>Passed by U/C</font>");}
                else {document.write("Error - no data")}
		}

		document.write("</td></tr></table>");


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




function billresult(bill)

{
	// Find the Bill's array refrence

	var ref=-1
	for (var loop = 0; loop <votingrecord.length; loop++)

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
			{
				document.write("<font color=green>Voted YES</font>");
			}
		else if (votingrecord[loop][ref]=="N")
			{document.write("<font color=red>Voted NO</font>");}
		else if (votingrecord[loop][ref]=="NP")
			{document.write("<font color=black>Not Present</font>");}
		else if (votingrecord[loop][ref]=="Table")
			{document.write("<font color=black>Bill Tabled</font>");}
		else if (votingrecord[loop][ref]=="A")
			{document.write("<font color=black>Abstained from voting</font>");}
		else if (votingrecord[loop][ref]=="NS")
			{document.write("<font color=black>Not a Senator at time of vote</font>");}
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
	for (var loop = 1; loop <votingrecord.length; loop++)
    	{
		if (votingrecord[0][loop] == undefined) break;
		if(loop%2 == 0) {document.write("<tr>");}
		else {document.write("<tr class='even'>");}
		document.write("<td>1415-",votingrecord[0][loop],"</td><td><a href=docs1415/1415-",votingrecord[0][loop],".docx>",votingrecord[1][loop],"</a></td><td><a href=billresult.shtml?bill=",votingrecord[0][loop],">Voting Results</a></td></tr>");



	}
	document.write("</table>");
}
