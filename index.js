var rect=require('./Reactangle');
function solve(l,b)
{
    console.log("solve for reactangle"+l+"and"+b);
    if(l<=0||b<=0)
    {
        console.log('not zero!!');
    }
    else{
        console.log("area of rect is: "+rect.area(l,b));
        console.log("paremeter of rectangle is : "+rect.per(l,b));
    }
}
solve(2,3);
solve(4,5);