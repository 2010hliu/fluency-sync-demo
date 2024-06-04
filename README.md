# fluency-sync-demo

./sync_cli

https://s3.amazonaws.com/SecurityDo/public/sync_cli

## CMD format
```
add_rule <repo-dir> <site-name> <rule-name>
add_filter <repo-dir> <site-name> <filter-name>/<rule-name> <group-name>
add_fpl_processor <repo-dir> <site-name> <rule-name> <group-name>
```

release <repo-dir> <site> <target-name>

### Add rule (from site)

add_rule /home/hliu/github/fluency-sync-demo mssptestsite GitHubSync_Placeholder

### Release rule(s), build release file

release /home/hliu/github/fluency-sync-demo rule


### Add filter (from site)

add_filter /home/hliu/github/fluency-sync-demo mssptestsite GitHubSync_Placeholder_Filter/GitHubSync_Placeholder Placeholder

### Release filter(s), build release file

release /home/hliu/github/fluency-sync-demo filter


### Add processor (from site)

add_fpl_processor /home/hliu/github/fluency-sync-demo mssptestsite GitHubSync_Placeholder_Processor Placeholder

### Release processor(s), build release file

release /home/hliu/github/scripts fplProcessor

