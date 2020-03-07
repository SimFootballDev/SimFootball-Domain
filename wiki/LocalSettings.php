<?php
# This file was automatically generated by the MediaWiki 1.29.1
# installer. If you make manual changes, please keep track in case you
# need to recreate them later.
#
# See includes/DefaultSettings.php for all configurable settings
# and their default values, but don't forget to make changes in _this_
# file, not there.
#
# Further documentation for configuration settings may be found at:
# https://www.mediawiki.org/wiki/Manual:Configuration_settings

# Protect against web entry
if ( !defined( 'MEDIAWIKI' ) ) {
	exit;
}

## Uncomment this to disable output compression
# $wgDisableOutputCompression = true;

$wgSitename = "NSFLWiki";

## The URL base path to the directory containing the wiki;
## defaults for all runtime URL paths are based off of this.
## For more information on customizing the URLs
## (like /w/index.php/Page_title to /wiki/Page_title) please see:
## https://www.mediawiki.org/wiki/Manual:Short_URL
$wgScriptPath = "/wiki";

## The protocol and server name to use in fully-qualified URLs
$wgServer = "http://sim-football.com";

## The URL path to static resources (images, scripts, etc.)
$wgResourceBasePath = $wgScriptPath;

## The URL path to the logo.  Make sure you change this from the default,
## or else you'll overwrite your logo when you upgrade!
$wgLogo = "$wgResourceBasePath/NSFL_Logo.png";

## The URL path to the favicon.
## Comment this out to use favicon.ico in the website root directory
$wgFavicon = "$wgResourceBasePath/favicon.ico";

## UPO means: this is also a user preference option

$wgEnableEmail = false;
$wgEnableUserEmail = false; # UPO

$wgEmergencyContact = "apache@iltornante.com";
$wgPasswordSender = "apache@iltornante.com";

$wgEnotifUserTalk = false; # UPO
$wgEnotifWatchlist = false; # UPO
$wgEmailAuthentication = true;

## Database settings
$wgDBtype = "mysql";
$wgDBserver = "localhost";
$wgDBname = "<DB_NAME>";
$wgDBuser = "<DB_USER>";
$wgDBpassword = "<DB_PASSWORD>";

# MySQL specific settings
$wgDBprefix = "nw_";

# MySQL table options to use during installation or update
$wgDBTableOptions = "ENGINE=InnoDB, DEFAULT CHARSET=binary";

# Experimental charset support for MySQL 5.0.
$wgDBmysql5 = false;

## Shared memory settings
$wgMainCacheType = CACHE_NONE;
$wgMemCachedServers = [];

## To enable image uploads, make sure the 'images' directory
## is writable, then set this to true:
$wgEnableUploads = true;

# merge the following with the default allowed list of file types
$wgFileExtensions = array(
    'png', 'gif', 'jpg', 'jpeg', 'svg' 
    );

$wgUseImageMagick = true;
$wgImageMagickConvertCommand = "/usr/bin/convert";

# InstantCommons allows wiki to use images from https://commons.wikimedia.org
$wgUseInstantCommons = false;

# Periodically send a pingback to https://www.mediawiki.org/ with basic data
# about this MediaWiki instance. The Wikimedia Foundation shares this data
# with MediaWiki developers to help guide future development efforts.
$wgPingback = false;

## If you use ImageMagick (or any other shell command) on a
## Linux server, this will need to be set to the name of an
## available UTF-8 locale
$wgShellLocale = "en_US.utf8";

## Set $wgCacheDirectory to a writable directory on the web server
## to make your wiki go slightly faster. The directory should not
## be publically accessible from the web.
#$wgCacheDirectory = "$IP/cache";

# Site language code, should be one of the list in ./languages/data/Names.php
$wgLanguageCode = "en-gb";

$wgSecretKey = "d2ccb876b6cb341f69f7e6457f44055afcbf7db4d0e32717d5faf423496a4adc";

# Changing this will log out all existing sessions.
$wgAuthenticationTokenVersion = "1";

# Site upgrade key. Must be set to a string (default provided) to turn on the
# web installer while LocalSettings.php is in place
$wgUpgradeKey = "b6b79ed3aa62e771";

## For attaching licensing metadata to pages, and displaying an
## appropriate copyright notice / icon. GNU Free Documentation
## License and Creative Commons licenses are supported so far.
$wgRightsPage = ""; # Set to the title of a wiki page that describes your license/copyright
$wgRightsUrl = "https://creativecommons.org/licenses/by/4.0/";
$wgRightsText = "Creative Commons Attribution";
$wgRightsIcon = "$wgResourceBasePath/resources/assets/licenses/cc-by.png";

# Path to the GNU diff3 utility. Used for conflict resolution.
$wgDiff3 = "/usr/bin/diff3";

# The following permissions were set based on your choice in the installer
$wgGroupPermissions['*']['edit'] = false;

## Default skin: you can change the default skin. Use the internal symbolic
## names, ie 'vector', 'monobook':
$wgDefaultSkin = "vector";

# Enabled skins.
# The following skins were automatically enabled:
wfLoadSkin( 'CologneBlue' );
wfLoadSkin( 'Modern' );
wfLoadSkin( 'MonoBook' );
wfLoadSkin( 'Vector' );


# Enabled extensions. Most of the extensions are enabled by adding
# wfLoadExtensions('ExtensionName');
# to LocalSettings.php. Check specific extension documentation for more details.
# The following extensions were automatically enabled:
wfLoadExtension( 'Cite' );
wfLoadExtension( 'CiteThisPage' );
wfLoadExtension( 'ConfirmEdit' );
wfLoadExtension( 'Gadgets' );
wfLoadExtension( 'ImageMap' );
wfLoadExtension( 'InputBox' );
wfLoadExtension( 'Interwiki' );
wfLoadExtension( 'LocalisationUpdate' );
wfLoadExtension( 'Nuke' );
wfLoadExtension( 'ParserFunctions' );
$wgPFEnableStringFunctions = true;
wfLoadExtension( 'PdfHandler' );
wfLoadExtension( 'Poem' );
wfLoadExtension( 'Renameuser' );
wfLoadExtension( 'SpamBlacklist' );
wfLoadExtension( 'SyntaxHighlight_GeSHi' );
wfLoadExtension( 'TitleBlacklist' );
wfLoadExtension( 'WikiEditor' );
wfLoadExtension( 'UserMerge' );
wfLoadExtension( 'BlockAndNuke' );
wfLoadExtension( 'CheckUser' );
wfLoadExtension( 'TemplateStyles' );
wfLoadExtension( 'CategoryTree' );

## configure ExternalData ##
wfLoadExtension( 'ExternalData' );
	// add the TCG database
	$edgDBServer['ut'] = "localhost";
	$edgDBServerType['ut'] = "mysql"; 
	$edgDBName['ut'] = "<DB_NAME>";
	$edgDBUser['ut'] = "<DB_USER>";
	$edgDBPass['ut'] = "<DB_PASSWORD>";

require_once "$IP/extensions/PageTools/PageTools.php";

require_once "$IP/extensions/RomanNumbers/RomanNumbers.php";
require_once "$IP/extensions/NumberFormat/NumberFormat.php";

require_once( "$IP/extensions/DateDiff/DateDiff.php" );
require_once( "$IP/extensions/Arrays/Arrays.php" );

## contribution scores options ##
require_once "$IP/extensions/ContributionScores/ContributionScores.php";
$wgContribScoreIgnoreBots = true;           // Exclude Bots from the reporting - Can be omitted.
$wgContribScoreIgnoreBlockedUsers = true;   // Exclude Blocked Users from the reporting - Can be omitted.
$wgContribScoresUseRealName = false;        // Use real user names when available - Can be omitted. Only for MediaWiki 1.19 and later.
$wgContribScoreDisableCache = false;        // Set to true to disable cache for parser function and inclusion of table.

//Each array defines a report - 7,50 is "past 7 days" and "LIMIT 50" - Can be omitted.
$wgContribScoreReports = array(
    array(7,50),
    array(30,50),
    array(0,50));
## end contribution scores options ##

# End of automatically generated settings.
# Add more configuration options below.
$wgWhitelist = "$IP/extensions/BlockAndNuke/whitelist.txt";

# set autoconfirmed parameters
$wgAutoConfirmAge = 86400*30; // thirty days
$wgAutoConfirmCount = 5;

# activate additional permissions for admin
$wgGroupPermissions['sysop']['interwiki'] = true;
$wgGroupPermissions['sysop']['usermerge'] = true;
$wgGroupPermissions['sysop']['checkuser'] = true;
$wgGroupPermissions['sysop']['checkuser-log'] = true;

# additional permissions for wiki team
$wgGroupPermissions['bureaucrat']['protect'] = true;
$wgGroupPermissions['bureaucrat']['delete'] = true;
$wgGroupPermissions['bureaucrat']['block'] = true;
$wgGroupPermissions['bureaucrat']['rollback'] = true;
$wgGroupPermissions['bureaucrat']['mergehistory'] = true;
$wgGroupPermissions['bureaucrat']['usermerge'] = true;

# add new protection level for wiki team only -- allows us to protect pages we only want the wiki team working on
$wgRestrictionLevels[] = 'approved-only';
# assign it to admin and wiki team
$wgGroupPermissions['sysop']['approved-only'] = true;
$wgGroupPermissions['bureaucrat']['approved-only'] = true;

# another protection level for "autoconfirmed" users
$wgRestrictionLevels[] = 'trusted';
# assign it to admin, wiki team and autoconfirmed
$wgGroupPermissions['sysop']['trusted'] = true;
$wgGroupPermissions['bureaucrat']['trusted'] = true;
$wgGroupPermissions['autoconfirmed']['trusted'] = true;

# prevent admin and wiki team from being merged
$wgUserMergeProtectedGroups = array( 'bureaucrat', 'administrator' );

# initialise scribunto
require_once "$IP/extensions/Scribunto/Scribunto.php";
$wgScribuntoUseGeSHi = true;
$wgScribuntoEngineConf['luastandalone']['luaPath'] = '/usr/bin/lua';

# error handling stuff
$wgShowExceptionDetails = true;

$wgTidyConfig = [
    'driver' => 'RaggettInternalPHP',
    'tidyConfigFile' => "$IP/includes/tidy/tidy.conf",
];

$wgShowDBErrorBacktrace = true;

#$wgReadOnly = 'Site is temporarily down for upgrades to the software. Should be back up soon.';
#session_save_path("tmp");
