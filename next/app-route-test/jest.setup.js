import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";

// start server before all tests
beforeAll(() => server.listen());

// reset handlers after each test
afterEach(() => server.resetHandlers());

beforeEach();
afterAll();
