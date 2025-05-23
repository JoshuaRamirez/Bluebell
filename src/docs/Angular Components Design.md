

### 1. **Component Initialization**

The component is responsible for setting up dependencies and handling lifecycle events.

* It creates a state container (`Model`) to hold data.
* It instantiates helper classes for API communication (`Api`), logic (`Behaviors`), and UI actions (`Interactions`).
* On initialization, it triggers a data load through the `Behaviors`.

---

### 2. **Model**

The model encapsulates all data relevant to the screen.

* It defines properties that represent the current UI state, such as form fields, error messages, and loading flags.
* It contains a validation method that checks if the form is in a usable state.
* It also holds a representation of the domain object (like Exchange or Account), which is often validated or bound to the UI.

---

### 3. **API Wrapper**

A dedicated class abstracts direct interaction with backend services.

* Each API method (GET, POST, PATCH, DELETE) is wrapped in a corresponding method.
* It instantiates the backend request classes and calls their execution methods.
* It isolates the API call structure so the rest of the application doesn't need to know how endpoints work.

---

### 4. **Behavior Class**

The behavior class handles all business logic.

* It knows how to load data from the API, transform it if necessary, and populate the model.
* It knows how to save data by converting the model into a request format and calling the appropriate API method.
* It also handles error checking, manages component change detection, and may store temporary UI state (like selected items).

---

### 5. **Interaction Class**

The interaction class maps UI events to business logic.

* Each button or UI action calls a method here.
* These methods directly call the behavior logic.
* This adds a level of indirection between UI events and data logic, which improves testability and keeps the component lean.

---

### 6. **Template**

The UI template uses Angular bindings to interact with the model.

* Input components bind to model properties using two-way binding.
* Validation status and error messages are also bound to the model.
* Actions like button clicks are wired to interaction methods.

---

### 7. **Domain Representation**

The domain object (like `Exchange` or `Account`) encapsulates the real-world entity being manipulated.

* These objects can have validations, transformation logic, or helper methods.
* They are used to populate the model and serve as input for API request bodies.

---

### 8. **Request and Response DTOs**

Request and response objects isolate transport format from the domain model.

* Request objects are built from domain or model state when saving data.
* Response objects are parsed from API responses and mapped into domain or model objects.

---

### 9. **Change Detection**

The component triggers Angular change detection manually when external state changes (via `MarkForCheck()`), keeping the UI up to date.

---

### 10. **Error Handling**

All operations contain defensive checks:

* Null checks and type validation before accessing properties.
* Error catching around API calls.
* Consistent error messages stored in the model and displayed to the user.

---

### Summary

Each screen is decomposed into:

* A data model,
* API operations,
* Business rules,
* Interaction mapping,
* A visual layout.

This structure separates concerns clearly. It promotes testability, consistency, and long-term maintainability without entangling UI logic, API access, or business logic.
