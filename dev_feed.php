<?php
// function for sorting by date
function date_compare($a, $b)
{
    $t1 = strtotime($a['published']);
    $t2 = strtotime($b['published']);
    return $t2 - $t1;
}    
// add any repos from the SimFootballDev organisation
$repo_array = array('tpetracker','SimFootball-Domain','UltimateTeam','DiscordStatsBot');
$feed_array = array();

// loop through my users
foreach($repo_array as $repo)
{
	// pull the RSS feeds
	$rss_feed = 'https://github.com/SimFootballDev/' . $repo . '/commits.atom';
	$github_rss = file_get_contents($rss_feed);
	$github_object = simplexml_load_string($github_rss);

	foreach($github_object->entry as $entry)
	{
		// establish local values, in case I want to do something else
		//$id = $entry->id->__toString();
		$published = $entry->updated->__toString();
		$link = $entry->link["href"]->__toString();
		$title = $entry->title->__toString();
		$author_name = $entry->author->name->__toString();
		$author_url = $entry->author->uri->__toString();
		// create an array
		$item = array();
		$item['repo'] = $repo;
		//$item['id'] = $id;
		$item['published'] = $published;
		$item['title'] = trim($title);
		$item['author_name'] = $author_name;
		$item['author_url'] = $author_url;
		$item['link'] = $link;
		// add the individual entry
		array_push($feed_array,$item);
	}
}
// sort the collection of feeds
usort($feed_array, 'date_compare');
// publish as json
$feed_json = json_encode($feed_array);
echo $feed_json;
?>