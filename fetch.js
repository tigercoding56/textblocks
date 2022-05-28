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
     return  args.text.slice(args.start , args.finish);
    }
    
    jsonExtract({name,data}) {
     return JSON.stringify(out)
    }
     
        
    
}

Scratch.extensions.register(new Textblocks())
