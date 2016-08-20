// Type definitions for jqueryfiletree 2.1.4
// Project: https://github.com/jqueryfiletree/jqueryfiletree
// Definitions by: Trevor Bekolay <https://github.com/tbekolay>
// Definitions: https://github.com/tbekolay/types-jqueryfiletree

/// <reference path="../jquery/jquery.d.ts"/>

interface JQueryFileTreeOptions {
    collapseEasing?: string;
    collapseSpeed?: number;
    errorMessage?: string;
    expandEasing?: string;
    expandSpeed?: number;
    folderEvent?: string;
    loadMessage?: string;
    multiFolder?: boolean;
    onlyFiles?: boolean;
    onlyFolders?: boolean;
    preventLinkAction?: boolean;
    root?: string;
    script?: string;
}

interface JQuery {
    fileTree(options: JQueryFileTreeOptions, callback: (file: string) => void): JQuery;
}
