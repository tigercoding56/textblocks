class TextBlocks {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Fetch",
            "name": "Fetch",
            "blocks": [
                        {
                            "opcode": "xtox",
                            "blockType": "reporter",
                            "text": "extract letters [start] to [finish] from [text]",
                            "arguments": {
                                "start": {
                                    "type": "number",
                                    "defaultValue": 3
                                },
                                "finish": {
                                    "type": "number",
                                    "defaultValue": 4
                                },
                                "text": {
                                    "type": "string",
                                    "defaultValue": "behind"
                                },
                            }
                        },
                        {
                            "opcode": "jsonExtract",
                            "blockType": "reporter",
                            "text": "extract [name] from [data]",
                            "arguments": {
                                "name": {
                                    "type": "string",
                                    "defaultValue": "temperature"
                                },
                                "data": {
                                    "type": "string",
                                    "defaultValue": '{"temperature": 12.3}'
                                },
                            }
                        },
                ],
        };
    }
    
    xtox({url}) {
        return fetch(url).then(response => response.text())
    }
    
    jsonExtract({name,data}) {
        var parsed = JSON.parse(data)
        if (name in parsed) {
            var out = parsed[name]
            var t = typeof(out)
            if (t == "string" || t == "number")
                return out
            if (t == "boolean")
                return t ? 1 : 0
            return JSON.stringify(out)
        }
        else {
            return  args.text.slice(args.start , args.finish);
        }
    }
}

Scratch.extensions.register(new ScratchFetch())
