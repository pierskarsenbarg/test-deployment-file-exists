import * as pulumi from "@pulumi/pulumi";
import * as command from "@pulumi/command";

const cmd = new command.local.Command("local-cmd", {
  create: "cat /tmp/myfile",
});
