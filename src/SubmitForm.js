import "./SubmitForm.css";
import submitOpenAi from "./submitOpenAi";
import Button from "./Button";

const SubmitForm = ({
  aiEngine,
  setAiEngine,
  aiPrompt,
  setAiPrompt,
  aiResp,
  setAiResp,
}) => {
  return (
    <section>
      <form
        id="submitToAi"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <fieldset
          form="submitToAi"
          onChange={(event) => {
            setAiEngine(event.target.value);
          }}
        >
          <legend>Select an Ai Engine:</legend>
          <div className="aiEngineSwiper">
            <div className="aiEngine">
              <input
                type="radio"
                id="ada"
                name="aiEngineChoice"
                value="text-ada-001"
                defaultChecked
              />
              <label for="ada">Ada</label>
              <div className="adaImg" />
            </div>
            <div className="aiEngine">
              <input
                type="radio"
                id="babbage"
                name="aiEngineChoice"
                value="text-babbage-001"
              />
              <label for="babbage">Babbage</label>
              <div className="babbageImg" />
            </div>
            <div className="aiEngine">
              <input
                type="radio"
                id="curie"
                name="aiEngineChoice"
                value="text-curie-001"
              />
              <label for="curie">Curie</label>
              <div className="curieImg" />
            </div>
            <div className="aiEngine">
              <input
                type="radio"
                id="davinci"
                name="aiEngineChoice"
                value="text-davinci-001"
              />
              <label for="davinci">DaVinci</label>
              <div className="daVinciImg" />
            </div>
          </div>
        </fieldset>
        <label htmlFor="aiPrompt">Enter a command for GPT-3!</label>
        <textarea
          id="aiPrompt"
          placeholder="You could ask for a joke..."
          value={aiPrompt}
          onChange={(event) => {
            setAiPrompt(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              submitOpenAi(
                event,
                aiEngine,
                aiPrompt,
                setAiPrompt,
                aiResp,
                setAiResp
              );
            }
          }}
        ></textarea>

        <Button
          onClick={(event) =>
            submitOpenAi(
              event,
              aiEngine,
              aiPrompt,
              setAiPrompt,
              aiResp,
              setAiResp
            )
          }
        >
          SUBMIT TO AI
        </Button>
      </form>
    </section>
  );
};

export default SubmitForm;
