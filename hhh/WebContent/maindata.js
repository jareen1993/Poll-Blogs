String.prototype.splitCSV = function(sep) {
  for (var foo = this.split(sep = sep || ","), x = foo.length - 1, tl; x
>= 0; x--) {
    if (foo[x].replace(/"\s+$/, '"').charAt(foo[x].length - 1) == '"') {
      if ((tl = foo[x].replace(/^\s+"/, '"')).length > 1 && tl.charAt(0)
== '"') {
        foo[x] = foo[x].replace(/^\s*"|"\s*$/g, '').replace(/""/g, '"');
      } else if (x) {
        foo.splice(x - 1, 2, [foo[x - 1], foo[x]].join(sep));
      } else foo = foo.shift().split(sep).concat(foo);
    } else foo[x].replace(/""/g, '"');
  } return foo;
};


var maindata = new Array();
var s_data = new Array();
var s_party = new Array();


function Read()
{
	var i=0;
    var Scr  = new ActiveXObject("Scripting.FileSystemObject");
    var CTF  = Scr .OpenTextFile("C:\\Users\\Sony\\Documents\\Workstation_Eclipse\\hhh\\WebContent\\MPTrack.csv", 1, true);

    while(i<553)
    {
        data = CTF .ReadLine()
        var parsed = data.splitCSV();
        maindata[i]=parsed;
        i++;
    }
    CTF .Close();

    var Nos = 0;
    var lund=0;
    for(var q=1; q<553; q++)
    {
        lund=0;
        for(var w=1; w<Nos+1; w++)
        {
            if(maindata[q][4]==s_data[w-1][0])
            {
                s_data[w-1][s_data[w-1].length]=q;
                lund=1;
                break;
            }
        }
        if(lund==0)
        {
            s_data[Nos]=new Array();
            s_data[Nos][0]=maindata[q][4];
            s_data[Nos][1]=q;
            Nos++;
        }
    }

    var Nop = 0;
    lund=0;
    for(var q1=1; q1<553; q1++)
    {
        lund=0;
        for(var w1=1; w1<Nop+1; w1++)
        {
            if(maindata[q1][6]==s_party[w1-1][0])
            {
                //document.write("Name Of time =  " + maindata[q][4]);
                //document.write("thb"+s_Table[0][3]);
                s_party[w1-1][s_party[w1-1].length]=q1;
                lund=1;
                break;
            }
        }
        if(lund==0)
        {
            s_party[Nop]=new Array();
            s_party[Nop][0]=maindata[q1][6];
            s_party[Nop][1]=q1;
            Nop++;
        }
    }
    
    var use=0;
    var value=0;
    for(var z1=0;z1<39;z1++)
    {

        use=z1;
         value=s_party[z1].length;
        for(var z=z1;z<39;z++)
        {

           //document.write("reeeeeeeeeeeeeeeeeeeeeeee"+ z);
            if(s_party[z].length>value)
            {
                value=s_party[z].length;
                use=z;
                //document.write("reeeeeeeeeeeeeeeeeeeeeeee" )
            }
        }
      
        var temp=s_party[use];
        s_party[use]=s_party[z1];
        s_party[z1]=temp;
    }
    
    
}