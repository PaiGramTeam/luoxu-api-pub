from fastapi import FastAPI
from httpx import AsyncClient
from starlette.middleware.cors import CORSMiddleware
from starlette.requests import Request
from starlette.responses import StreamingResponse, RedirectResponse
from starlette.staticfiles import StaticFiles

app = FastAPI()
local_api = "http://127.0.0.1:9008/luoxu/"
allowed_origins = [
    "search-pub.xtaolabs.com",
    "127.0.0.1:9009",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
groups_id = [1366383997, 1797471403]
groups = {
  "groups": [
    {
      "group_id": "1366383997",
      "name": "原神 · 提瓦特大陆",
      "pub_id": "GenshinImpact"
    },
    {
      "group_id": "1797471403",
      "name": "崩坏：星穹铁道 · 仙舟：罗浮",
      "pub_id": "HSRCN_Group"
    }
  ]
}


@app.get("/luoxu/groups")
async def get_groups():
    return groups


@app.get("/luoxu/search")
async def get_search(request: Request):
    try:
        if int(request.query_params.get("g", 0)) in groups_id:
            async with AsyncClient(timeout=60) as client:
                r = await client.get(f"{local_api}search", params=request.query_params)
                return r.json()
    except:
        pass
    return {}


@app.get("/luoxu/names")
async def get_names(request: Request):
    try:
        if int(request.query_params.get("g", 0)) in groups_id:
            async with AsyncClient(timeout=60) as client:
                r = await client.get(f"{local_api}names", params=request.query_params)
                return r.json()
    except:
        pass
    return {}


@app.get("/luoxu/avatar/{avatar}")
async def read_avatar(avatar: str) -> StreamingResponse:
    async with AsyncClient(timeout=60) as client:
        r = await client.get(f"{local_api}avatar/{avatar}")
        return StreamingResponse(r.aiter_bytes(), media_type="image/png")


@app.get("/")
async def redirect_to_html():
    return RedirectResponse(url="/index.html")


app.mount("/", StaticFiles(directory="html"), name="html")


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, port=9009)
