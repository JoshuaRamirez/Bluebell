Based on the code you provided and your architecture description, here’s a domain-agnostic **specification** of the architectural pattern you're using. This is a modular, role-based component architecture for frontend applications (especially Angular-like ecosystems), where each component is composed of clearly separated concerns across a defined set of roles.

---

## 📐 **Role-Based Component Architecture Specification**

### 🧩 Overview

Each component is designed as a folder containing multiple files, each with a specific role. Files are named according to the component they belong to and their role, using the format:

```
<ComponentName>.<Role>.ts
```

This pattern ensures separation of concerns, testability, and ease of collaboration.

---

### 📁 File Roles & Responsibilities

| Role             | Description                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Component**    | Defines the Angular component (`@Component` class). It connects template, data, events, and services. Minimal logic—delegates to other roles.          |
| **Api**          | Handles external API communication. Wraps HTTP calls and exposes request objects or observables.                                                       |
| **Data**         | Stores local component state, possibly with basic typed models or DTOs. Acts as the “client-side database” for the component.                          |
| **Events**       | Manages user or application events. Can encapsulate event emitters, subscriptions, or event dispatching logic.                                         |
| **Interactions** | Handles DOM or user interaction logic—clicks, gestures, keyboard input, etc. Might call services or trigger events.                                    |
| **Behaviors**    | Encapsulates business logic and data transformations. May call APIs, process state, and determine decisions (e.g., validation rules, computed values). |
| **Validation**   | Contains validators and validation rules. Applies constraints to data or user inputs and returns results or error messages.                            |
| **Styles**       | Defines component styles, typically in `.scss` or `.css`.                                                                                              |
| **Template**     | Contains the HTML structure of the component with Angular bindings and directives.                                                                     |

---

### 🔁 File Interactions (Dependency Flow)

```plaintext
Template
   ↕
Component
   ↕
 ┌─────────────────────────────────────────────────────────┐
 │                   Supporting Roles                      │
 ├────────┬────────┬──────────────┬────────────┬───────────┤
 │  Api   │  Data  │ Interactions │ Behaviors  │ Validation│
 └────────┴────────┴──────────────┴────────────┴───────────┘
```

#### Role Communication Guidelines:

* **Component ↔ Api**: Uses request objects (e.g., `HttpPostRequest`) to send/receive data. Subscribes to responses via observables or subjects.
* **Component ↔ Data**: Reads and updates local state. Passes state into service functions (e.g., for transformation or validation).
* **Component ↔ Interactions**: Handles user actions and delegates input behavior to interaction handlers.
* **Component ↔ Behaviors**: Delegates business logic and decision-making here. Often coordinates data updates or validation.
* **Component ↔ Validation**: Uses validators before triggering saves or updates.
* **Component ↔ Template**: Binds values, triggers actions, shows visual state.

---

### 🧱 Core Abstractions

Your pattern demonstrates layered abstraction via base classes:

* `HttpRequest<T>`: Base class for all API requests.
* `HttpGetRequest<T>` / `HttpPostRequest<TReq, TRes>` / etc.: Specialized API request handlers.
* Observable streams (`$Response`) standardize async handling across request types.

This encourages reusable request patterns while keeping request logic separate from component logic.

---

### ✅ Benefits

* **Separation of Concerns**: Each file has a focused responsibility.
* **Testability**: Roles are isolated and can be unit tested independently.
* **Scalability**: Easy to add new behavior or interaction logic without cluttering the component.
* **Consistency**: Follows a clear naming and structural pattern across components.

---

### 🛠️ Optional Enhancements

Depending on project complexity, you might include:

* **Facade Layer**: If multiple roles need to be orchestrated together.
* **State Management**: Introduce state containers for shared or complex state (e.g., Akita, NgRx).
* **Dependency Injection Tokens**: To decouple services further.

---

### 📝 Example File Names

For a component called `ExchangeScreen`:

```plaintext
ExchangeScreen.Component.ts
ExchangeScreen.Api.ts
ExchangeScreen.Data.ts
ExchangeScreen.Events.ts
ExchangeScreen.Interactions.ts
ExchangeScreen.Behaviors.ts
ExchangeScreen.Validation.ts
ExchangeScreen.Template.html
ExchangeScreen.Styles.scss
```

