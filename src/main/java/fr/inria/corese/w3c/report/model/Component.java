package fr.inria.corese.w3c.report.model;

/** Component exercised by a W3C test suite. */
public enum Component {
    CORE("corese-core", "Core Engine");

    private final String jsonValue;
    private final String displayName;

    Component(String jsonValue, String displayName) {
        this.jsonValue = jsonValue;
        this.displayName = displayName;
    }

    public String jsonValue() {
        return jsonValue;
    }

    public String displayName() {
        return displayName;
    }
}
