let $x := doc("6nations11.xml")//match/summary/team[@name="France"]
return <totalScore> {sum($x/@score)} </totalScore>