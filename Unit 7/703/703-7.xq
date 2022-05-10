for $x in doc("6nations11.xml")//match/summary
where $x/team[@name="Scotland"]
return <match> {concat($x/team[1]/@name," vs ", $x/team[2]/@name)}</match>