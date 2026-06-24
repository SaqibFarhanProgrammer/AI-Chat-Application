import React, { useContext, useState, useEffect, useRef } from "react";
import { context } from "../context/context";
import Chatboxes from "./Chatboxes";
import Navbar from "./Navbar";
import { Send, Plus, FileText } from "lucide-react";

export default function ChatBox() {
  const { prompt, setPrompt, getResponse } = useContext(context);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pdfText, setPdfText] = useState("");
  const [showPdfBadge, setShowPdfBadge] = useState(false);
  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  async function handleSend(promptText) {
    if (!promptText.trim()) return;

    const finalPrompt = pdfText ? `${promptText}\n\n[PDF Content]:\n${pdfText}` : promptText;

    setPrompt("");
    setPdfText("");
    setShowPdfBadge(false);
    setMessages((prev) => [...prev, { role: "user", text: promptText, hasPdf: !!pdfText }]);
    setLoading(true);

    try {
      const aiRes = await getResponse(finalPrompt);
      setMessages((prev) => [...prev, { role: "ai", text: aiRes }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "ai", text: "Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  async function handlePdf(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const text = await file.text();
      setPdfText(text);
      setShowPdfBadge(true);
    } catch (e) {
      setPdfText(`[Uploaded file: ${file.name}]`);
      setShowPdfBadge(true);
    }

    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(prompt);
    }
  };

  return (
    <div className="chatbox-wrapper">
      <Navbar />

      {messages.length === 0 ? (
        <div className="hero-section">
          <h1 className="hero-title">Neura AI</h1>
        </div>
      ) : (
        <div className="messages-container">
          {messages.map((data, i) => (
            <div
              key={i}
              className={`message-bubble ${data.role === "user" ? "user-msg" : "ai-msg"}`}
            >
              <div className="message-header">
                <span className="message-role">{data.role === "user" ? "You" : "Neura"}</span>
                {data.hasPdf && (
                  <span className="pdf-badge">
                    <FileText size={12} /> PDF attached
                  </span>
                )}
              </div>
              <div
                className="message-body"
                dangerouslySetInnerHTML={{ __html: data.text }}
              />
            </div>
          ))}

          {loading && (
            <div className="message-bubble ai-msg">
              <div className="message-header">
                <span className="message-role">Neura</span>
              </div>
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>
      )}

      {/* Input Area */}
      <div className={`input-area ${messages.length === 0 ? "input-hero" : "input-bottom"}`}>
        {showPdfBadge && (
          <div className="pdf-badge-input">
            <FileText size={14} />
            <span>PDF loaded</span>
            <button onClick={() => { setPdfText(""); setShowPdfBadge(false); }}>×</button>
          </div>
        )}

        <div className="input-wrapper">
          <textarea
            onKeyDown={handleKeyDown}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask anything..."
            rows={1}
            className="chat-textarea"
          />

          <div className="input-actions">
            <label className="action-btn file-btn" title="Upload PDF">
              <Plus size={18} />
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handlePdf}
                className="hidden"
              />
            </label>

            <button
              disabled={!prompt.trim()}
              onClick={() => handleSend(prompt)}
              className={`action-btn send-btn ${prompt.trim() ? "active" : ""}`}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {messages.length === 0 && <Chatboxes />}
    </div>
  );
}