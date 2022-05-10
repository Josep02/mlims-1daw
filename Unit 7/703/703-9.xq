for $x in doc("6nations11.xml")//match/summary
let $sum := sum ($x/team/@score)
return <team> {$sum}</team>