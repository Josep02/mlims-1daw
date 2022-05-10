for $x in doc("6nations11.xml")//match/summary
return <match> {concat($x/team[1]/@name," vs ", $x/team[2]/@name)}</match>