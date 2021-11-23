import React from "react";
import "./Home.css";
const Home = ({ info, onRouteChange }) => {
  console.log(info);
  return (
    <div className="Home">
      <div className="Feature">
        <div className="Search">
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSIjMTEwZTBmIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTcyLjI0LDEwLjMyYy0zMi4yNjM0NCwwIC01OC40OCwyNi4yMTY1NiAtNTguNDgsNTguNDhjMCwzMi4yNjM0NCAyNi4yMTY1Niw1OC40OCA1OC40OCw1OC40OGMxMi43NjU2MywwIDI0LjU2Mzc1LC00LjExMTg3IDM0LjE4NSwtMTEuMDcyNWw0NS4yNTc1LDQ1LjE1bDkuNjc1LC05LjY3NWwtNDQuNzIsLTQ0LjgyNzVjOC43ODgxMywtMTAuMjM5MzcgMTQuMDgyNSwtMjMuNTI5MDYgMTQuMDgyNSwtMzguMDU1YzAsLTMyLjI2MzQ0IC0yNi4yMTY1NiwtNTguNDggLTU4LjQ4LC01OC40OHpNNzIuMjQsMTcuMmMyOC41NDEyNSwwIDUxLjYsMjMuMDU4NzUgNTEuNiw1MS42YzAsMjguNTQxMjUgLTIzLjA1ODc1LDUxLjYgLTUxLjYsNTEuNmMtMjguNTQxMjUsMCAtNTEuNiwtMjMuMDU4NzUgLTUxLjYsLTUxLjZjMCwtMjguNTQxMjUgMjMuMDU4NzUsLTUxLjYgNTEuNiwtNTEuNnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
          />
          <input placeholder="Search with Name or Number" />
        </div>
        <div className="newMember">
          <p>Add New Member</p>
          <img src="data:image/png;base64,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" />
        </div>
        <div className="update">
          <p className="update-button">Update Members Details</p>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAABmJLR0QA/wD/AP+gvaeTAAADcUlEQVRoge2azU8TQRjG31l6akOLXgRPJFQ4oqEaCXIRggl+JLSViy3pKshBDbT14wRoRBKBFuGmGFs+PJWWqJFE5ICHcqR/ACVcTAkexAYkJSm7HiasddtZFiy702R/p7fZ5/A8M7P7zk4XnTCaoJBh1Dbwv2gB1KbgA+jkiCqrqmpra0tKSo7bDYbjubnPc6vxuBwxkn4KnamsHPb76uvr8+RNLmtrazVnz8lRSs1AjcUSno0YjcY8uToWiAGKi4un309j9+l0euHrQnxlZY/bU8DTzu+dSDgsU0wMcLez81RpKQBsbm7aW6yxWCw/7vIN8Sl07cZ1XPT19lLrHiQCmM1mXMx/mVfKzFEgBjAYDLj4sbGhlJmjUPCNTAugNloAtaE6AELoxcDA9/XE8/5+hFBOjazdqCoghAaHh+60twPAvQf3TSZTd1cXx3EiGaUzkOke42hzvhodZRixYRoDZLvH5MxAXQCSe0x2BroCIIR8I37BfTAQEC4JtaPNOez3Cfc0RQHw2LtYFv+cmph86PEKV71uz9vxcVy7WHZ0bAzPAy0Bssde9Mzhef7Jo8fZ80DLY9RmtwtjHwwEvG4Pz/MiDc/zXrcHALDSxbJL0SWKZgAXJPcYnEGYB47jiKcSP5O/cHHSpMRpCkKoxWpFCEXC4Uz3OW1gMQDMRiK0BCBxoA1altCR0QKojRZAbRiE0M3WVpvdTnpjyORQYmXQ2ez21+NvAKDuUp1EB4H9bo+7IEJoJhRSziYZRhhLF8v6Rvykoc10DwDZb0ZqwcyEQkJnJmUQuQ8GArORiKI2yTB4d5Fzp4rJucuVWGkKo4P9napOp8MuHW3O9F5aUIjGXvo+UZ6/eyGE0MuhwfaODpJ0amLS3d2t8Oo/xF4Iz4OwlkSo4l4O/zQyUgZq3UN2J87OQLN7yHkyhzPspnZdt9ngu0BvTw9Vd62IA/4nVh3thYZ6tABqowU4TspOl+Fia2uLpKE6QFPTFVzEyd8O0RugxmLpe/YU158+fCTJ5DayCrO5+Wozg5QIrDfoq6urGxobi4qKACCRSFw8f2F7ezunWO7pdCg8U15enjePskkmk85bDpJ7oHkJAcC3xcXGyw2x5WUJjewlVFFhtdn0Bn2evEmRSqXWE+vRaFTOd3+0b+YOhOolJActgNoUfIA/fm9weNlTLF0AAAAASUVORK5CYII=" />
        </div>
        <div className="signOut" onClick={() => onRouteChange("SignIn")}>
          <p className="signOut-text">Sign Out</p>
        </div>
      </div>
      <div className="expires">
        <div className="expires-head">
          <p>Today's Expires</p>
        </div>
        <div className="expires-all">
          {info.map((data) => {
            return (
              <div
                onClick={() => onRouteChange("Details")}
                className="expires-all-member"
                key={data.no}
              >
                <img className="expires-all-member-img" src={data.img} />
                <div className="expires-all-member-text">
                  <p>{data.no}</p>
                  <p>{data.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
