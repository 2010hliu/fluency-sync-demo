// Processor Name:
// GitHubSync_Placeholder_Processor
// Description:
// Template: Default system Syslog event passthrough 

// Data input format: ({ obj, size, source }) or ( doc )
function main({obj, size, source}) {
    //
    obj["@type"] = "event"
    if (source && source != "" ) {
        obj["@collector"] = source
    } else {
        obj["@collector"] = "fluency-server" // server side syslog collector ('local')
    }
    obj["@parser"] = "fpl-sync"
    return { status: "pass" }
}
