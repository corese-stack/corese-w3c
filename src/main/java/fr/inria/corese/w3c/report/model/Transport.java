package fr.inria.corese.w3c.report.model;

/** Transport used to exercise a conformance suite. */
public enum Transport {
    IN_MEMORY("In-Memory"),
    HTTP("HTTP");

    private final String jsonValue;

    Transport(String jsonValue) {
        this.jsonValue = jsonValue;
    }

    public String jsonValue() {
        return jsonValue;
    }
}
